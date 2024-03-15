export const actionTypes = {
  SET_CART_ITEMS: "SET_CART_WITH_ITEMS",
  SET_PRODUCTS: "SET_PRODUCTS"
}

export function setCartItems(payload) {
  return { type: actionTypes.SET_CART_ITEMS, payload: payload }
}

export function setProducts(payload) {
  return { type: actionTypes.SET_PRODUCTS, payload:payload }
}
