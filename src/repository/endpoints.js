const authBaseUrl = "jwt/";
export const loginUrl = `${authBaseUrl}create/`;
export const refreshTokenUrl = `${authBaseUrl}refresh/`;
export const verifyTokenUrl = `${authBaseUrl}verify/`;

//
// PRODUCTS AND CATEGORIES ENDPOINTS
const storeBaseUrl = "store/";
export const categoriesUrl = `${storeBaseUrl}categories/`;
export const productsUrl = `${storeBaseUrl}products/`;
//
export const getProductDetailUrl = (slug) => `${storeBaseUrl}/product-detail/${slug}/`;
// export const getOrderItemDetailUrl = (id) =>
//   `${ordersBaseUrl}vendor-order-item/${id}/`;