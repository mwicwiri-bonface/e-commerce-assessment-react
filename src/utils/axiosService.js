import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/api/v1";

const axiosInstance = (url) => axios.create({
  baseURL: baseURL + url, // Replace with your API base URL
  timeout: 10000, // Set timeout for requests
  headers: {
    'Content-Type': 'application/json', // Set default content type
    accept: "application/json",
  },
});

export default axiosInstance;