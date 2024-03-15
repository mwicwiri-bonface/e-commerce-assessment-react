import axios from "axios";
import { getLoggedInUser, setLoggedInUser } from "~/utilities/account-helpers";
import { refreshTokenUrl } from "./endpoints";
import { loginPageRoute } from "~/appconfig/routes";
const baseDomain = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000/api/v1/";

const user = getLoggedInUser();
const accessToken = user?.access;

export const customHeaders = {
  Accept: "application/json",
  authorization: accessToken && `Bearer ${accessToken && accessToken}`,
};

export const baseUrl = `${baseDomain}`;

// const axiosInstance = axios.create({
//     baseURL: baseUrl,
//     headers: customHeaders,
// });

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {
    Authorization: accessToken && `Bearer ${accessToken && accessToken}`,
    // "Content-Type": "application/json",
    // accept: "application/json",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const redirectToLogin = () => {
  window.location.href = loginPageRoute;
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const originalRequest = err.config;

    if (
      err.response?.status === 401 &&
      err.response?.statusText === "Unauthorized" &&
      !originalRequest._retry
    ) {
      const userInStorage = getLoggedInUser();
      const refreshToken = userInStorage.refresh;

      if (refreshToken) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              return axios(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        return new Promise(function (resolve, reject) {
          axiosInstance
            .post(refreshTokenUrl, {
              refresh: refreshToken,
            })
            .then((response) => {
              const new_access_token = response.data.access;
              const new_refresh_token = response.data.refresh;
              const newUserData = {
                ...userInStorage,
                access: new_access_token,
                refresh: new_refresh_token,
              };

              const headerToken = `Bearer ${new_access_token}`;
              axios.defaults.headers.common["Authorization"] = headerToken;
              originalRequest.headers["Authorization"] = headerToken;
              processQueue(null, new_access_token);
              resolve(axios(originalRequest));
              setLoggedInUser(newUserData);
            })
            .catch((err) => {
              console.log("error is >>>>", err.response);
              processQueue(err, null);
              reject(err);
              const errorData = err.response.data;
              // if (errorData.code === "token_not_valid") {
              //   notification.open({
              //     message: "Login Required!",
              //     description: `Please login to continue`,
              //     duration: 5,
              //   });
              //   redirectToLogin()
              // }

              notification.open({
                message: "Login Required!",
                description: `Please login to continue`,
                duration: 5,
              });
              redirectToLogin();

              // TODO to redirect to login here if route requires login
            })
            .then(() => {
              isRefreshing = false;
            });
        });
      } else {
        redirectToLogin();
      }
    }

    return Promise.reject(err);
  }
);
export default axiosInstance;

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};