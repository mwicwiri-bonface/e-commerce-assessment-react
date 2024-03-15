export const actionTypes = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  CHECK_AUTHORIZATION: "CHECK_AUTHORIZATION",
  SET_USER_PROFILE: "SET_USER_PROFILE",
}

export function login() {
  return { type: actionTypes.LOGIN_REQUEST }
}

export function loginSuccess() {
  return { type: actionTypes.LOGIN_SUCCESS }
}

export function logOut() {
  return { type: actionTypes.LOGOUT }
}

export function logOutSuccess() {
  return { type: actionTypes.LOGOUT_SUCCESS }
}

export function setUserProfile(payload) {
  console.log("setting user profile >>>>", payload)
  return { type: actionTypes.SET_USER_PROFILE, payload: payload }
}