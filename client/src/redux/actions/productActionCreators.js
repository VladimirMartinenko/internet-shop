import ACTION_TYPES from "./types";

export const productGetRequest = () => ({
  type: ACTION_TYPES.PRODUCT_GET_REQUEST,
  });
export const productGetSucces = (product) => ({
  type: ACTION_TYPES.PRODUCT_GET_SUCCESS,
  payload: { values: product },
  });
export const productGetError = (error) => ({
  type: ACTION_TYPES.PRODUCT_GET_ERROR,
  payload: { error },
});
export const productGetByIdRequest = (id) => ({
  type: ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST,
  payload: {values: id}
});
export const productGetByIdSucces = (product) => ({
  type: ACTION_TYPES.PRODUCT_GET_BY_ID_SUCCESS,
  payload: { values: product },
  });
export const productGetByIdError = (error) => ({
  type: ACTION_TYPES.PRODUCT_GET_BY_ID_ERROR,
  payload: { error },
});
export const productGetByCategoryRequest = (categoryId) => ({
  type: ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_REQUEST,
  payload: {values: categoryId}
});
export const productGetByCategorySucces = (product) => ({
  type: ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_SUCCESS,
  payload: { values: product },
  });
export const productGetByCategoryError = (error) => ({
  type: ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_ERROR,
  payload: { error },
});
export const productCreateRequest = (product) => ({
  type: ACTION_TYPES.PRODUCT_CREATE_REQUEST,
  payload: { values: product},
});
export const productCreateSucces = (product) => ({
  type: ACTION_TYPES.PRODUCT_CREATE_SUCCESS,
  payload: { values: product },
  });
export const productCreateError = (error) => ({
  type: ACTION_TYPES.PRODUCT_CREATE_ERROR,
  payload: { error },
});
export const productDeleteRequest = (productId) => ({
  type: ACTION_TYPES.PRODUCT_DELETE_REQUEST,
  payload: { values: productId},
});
export const productDeleteSucces = (product) => ({
  type: ACTION_TYPES.PRODUCT_DELETE_SUCCESS,
  payload: { values: product },
  });
export const productDeleteError = (error) => ({
  type: ACTION_TYPES.PRODUCT_DELETE_ERROR,
  payload: { error },
});