
const USER_AUTH_KEY = "loggedInUser"

export const getLoggedInUser = () => {
  let user
  if (typeof window !== "undefined") {
    user = localStorage.getItem(USER_AUTH_KEY)
  }
  return user && JSON.parse(user)
}

export const setLoggedInUser = (payload) => {
  if (typeof window !== "undefined") {
    const userData = JSON.stringify(payload)
    localStorage.setItem(USER_AUTH_KEY, userData)
  }
  return
}

export const clearLoggedInUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_AUTH_KEY)
  }
}

export const handleLogout = async (
  setIsLoggingOut,
  dispatch,
  AccountRepositoryInstance
) => {
  setIsLoggingOut(true)
  const user = getLoggedInUser()
  const response = await AccountRepositoryInstance.logoutUser({
    refresh_token: user.refresh,
  })
  if (response) {
    dispatch(logOut())
    clearLoggedInUser()
    setIsLoggingOut(false)

    window.location.href = loginPageRoute
  }
}