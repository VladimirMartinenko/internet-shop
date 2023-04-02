import ACTION_TYPES from "./types";

export const basketCreateRequest = (product) => ({
  type: ACTION_TYPES.BASKET_CREATE_REQUEST,
  payload: { values: product},
});
export const basketCreateSucces = (product) => ({
  type: ACTION_TYPES.BASKET_CREATE_SUCCESS,
  payload: { values: product },
  });
export const basketCreateError = (error) => ({
  type: ACTION_TYPES.BASKET_CREATE_ERROR,
  payload: { error },
});

export const basketClearRequest = () => ({
  type: ACTION_TYPES.BASKET_CLEAR_REQUEST, 
});
export const basketClearSucces = () => ({
  type: ACTION_TYPES.BASKET_CLEAR_SUCCESS,
  });
export const basketClearError = (error) => ({
  type: ACTION_TYPES.BASKET_CLEAR_ERROR,
  payload: { error },
});
export const basketMinusRequest = (id) => ({
  type: ACTION_TYPES.BASKET_MINUS_REQUEST,
  payload: { values: id}, 
});
export const basketMinusSucces = (id) => ({
  type: ACTION_TYPES.BASKET_MINUS_SUCCESS,
  payload: { values: id},
  });
export const basketMinusError = (error) => ({
  type: ACTION_TYPES.BASKET_MINUS_ERROR,
  payload: { error },
});
export const basketPlusRequest = (id) => ({
  type: ACTION_TYPES.BASKET_PLUS_REQUEST, 
  payload: { values: id},
});
export const basketPlusSucces = (id) => ({
  type: ACTION_TYPES.BASKET_PLUS_SUCCESS,
  payload: { values: id},
  });
export const basketPlusError = (error) => ({
  type: ACTION_TYPES.BASKET_PLUS_ERROR,
  payload: { error },
});
export const basketDeleteRequest = (id) => ({
  type: ACTION_TYPES.BASKET_DELETE_REQUEST, 
  payload: { values: id},
});
export const basketDeleteSucces = (id) => ({
  type: ACTION_TYPES.BASKET_DELETE_SUCCESS,
  payload: { values: id},
  });
export const basketDeleteError = (error) => ({
  type: ACTION_TYPES.BASKET_DELETE_ERROR,
  payload: { error },
});
export const basketSumRequest = () => ({
  type: ACTION_TYPES.BASKET_SUM_REQUEST, 
});
export const basketSumSucces = () => ({
  type: ACTION_TYPES.BASKET_SUM_SUCCESS,
  });
export const basketSumError = (error) => ({
  type: ACTION_TYPES.BASKET_SUM_ERROR,
  payload: { error },
});