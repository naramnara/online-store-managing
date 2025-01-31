export const ADD_PRODUCT = 'products/add';
export const addProduct = (product) =>({
    type: ADD_PRODUCT,
    payload: product,
});