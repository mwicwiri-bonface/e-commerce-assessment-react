import { actionTypes } from "./action"

export const initState = {
  isLoggedIn: false,
  access: null,
  refresh: null,
  user_id: null,
  userProfile: null,
  products: null,
  cartItems: null
}

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...{ isLoggedIn: true },
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...{
          access: null,
          refresh: null,
          user_id: null,
          is_customer: null,
          is_vendor: null,
        },
      }

    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        ...{ products: action.payload },
      }

    case actionTypes.SET_CART_ITEMS:
      return {
        ...state,
        ...{ cartItems: action.payload },
      }

    case actionTypes.SET_USER_PROFILE:
      return {
        ...state,
        ...{ vendorProfile: action.payload },
      }
    default:
      return state
  }
}

export default reducer