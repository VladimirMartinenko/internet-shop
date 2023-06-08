import ACTION_TYPES from "./types";

export const buyerCreate = (buyer) => ({
  type: ACTION_TYPES.BUYER_CREATE,
  payload: { values: buyer },
  });
export const buyerLocalUpdate = (field) => ({
  type: ACTION_TYPES.BUYER_LOCAL_UPDATE,
  payload: { values: field },
  });
export const buyersGetRequest = () => ({
  type: ACTION_TYPES.BUYERS_GET_REQUEST,
  });
export const buyersGetSucces = (buyers) => ({
  type: ACTION_TYPES.BUYERS_GET_SUCCESS,
  payload: { values: buyers },
  });
export const buyersGetError = (error) => ({
  type: ACTION_TYPES.BUYERS_GET_ERROR,
  payload: { error },
});
export const buyersDeleteRequest = (buyersId) => ({
  type: ACTION_TYPES.BUYERS_DELETE_REQUEST,
  payload: { values: buyersId },
  });
export const buyersDeleteSucces = (buyersId) => ({
  type: ACTION_TYPES.BUYERS_DELETE_SUCCESS,
  payload: { values: buyersId },
  });
export const buyersDeleteError = (error) => ({
  type: ACTION_TYPES.CATEGORY_DELETE_ERROR,
  payload: { error },
});