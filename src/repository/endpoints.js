const authBaseUrl = "jwt/";
export const loginUrl = `${authBaseUrl}create/`;
export const refreshTokenUrl = `${authBaseUrl}refresh/`;
export const verifyTokenUrl = `${authBaseUrl}verify/`;

// // ORDERS ENDPOINTS
// const ordersBaseUrl = "orders/api/";
// export const orderItemsUrl = `${ordersBaseUrl}recent-order-items/`;
//
// // PRODUCTS AND CATEGORIES ENDPOINTS
// const productsBaseUrl = "products/api/";
// export const categoriesUrl = `${productsBaseUrl}categories/?with_specification=True`;
// export const subcategoriesUrl = `${productsBaseUrl}subcategories/`;
// export const productsUrl = `${productsBaseUrl}products/`;
// export const productVariationTypesUrl = `${productsBaseUrl}variation-types/`;
//
// export const createProductUrl = `${productsBaseUrl}create-product/`;
//
// export const getProductDetailUrl = (slug) => `${productsUrl}${slug}/`;
// export const getOrderItemDetailUrl = (id) =>
//   `${ordersBaseUrl}vendor-order-item/${id}/`;