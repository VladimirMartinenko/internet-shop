import ACTION_TYPES from "./types";

export const buyerCreateRequest = (buyer) => ({
  type: ACTION_TYPES.BUYER_CREATE_REQUEST,
  payload: { values: buyer},
});
export const buyerCreateSucces = (buyer) => ({
  type: ACTION_TYPES.BUYER_CREATE_SUCCESS,
  payload: { values: buyer },
  });
export const buyerCreateError = (error) => ({
  type: ACTION_TYPES.BUYER_CREATE_ERROR,
  payload: { error },
});
export const buyerLocalUpdateRequest = (field) => ({
  type: ACTION_TYPES.BUYER_LOCAL_UPDATE_REQUEST,
  payload: { values: field},
});
export const buyerLocalUpdateSucces = (field) => ({
  type: ACTION_TYPES.BUYER_LOCAL_UPDATE_SUCCESS,
  payload: { values: field },
  });
export const buyerLocalUpdateError = (error) => ({
  type: ACTION_TYPES.BUYER_LOCAL_UPDATE_ERROR,
  payload: { error },
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