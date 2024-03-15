import { actionTypes } from "./action"

export const initState = {
  products: null,
  cartItems: null
}

function reducer(state = initState, action) {
  switch (action.type) {
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
    default:
      return state
  }
}

export default reducer