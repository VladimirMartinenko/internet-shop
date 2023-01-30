import ACTION_TYPES from "./types";

export const categoryRequest = () => ({
  type: ACTION_TYPES.CATEGORY_GET_REQUEST
});
export const categorySucces = (category) => ({
  type: ACTION_TYPES.CATEGORY_GET_SUCCESS,
  payload: { values: category },
  });
export const categoryError = (error) => ({
  type: ACTION_TYPES.CATEGORY_GET_ERROR,
  payload: { error },
});
export const categoryCreateRequest = (category) => ({
  type: ACTION_TYPES.CATEGORY_CREATE_REQUEST,
  payload: { values: category},
});
export const categoryCreateSucces = (category) => ({
  type: ACTION_TYPES.CATEGORY_CREATE_SUCCESS,
  payload: { values: category },
  });
export const categoryCreateError = (error) => ({
  type: ACTION_TYPES.CATEGORY_CREATE_ERROR,
  payload: { error },
});
