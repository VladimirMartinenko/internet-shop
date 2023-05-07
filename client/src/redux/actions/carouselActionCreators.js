import ACTION_TYPES from "./types";

export const nextSlideRequest = () => ({
  type: ACTION_TYPES.NEXT_SLIDE_REQUEST
});
export const nextSlideSucces = (length) => ({
  type: ACTION_TYPES.NEXT_SLIDE_SUCCESS,
  payload: { values: length },
  });
export const nextSlideError = (error) => ({
  type: ACTION_TYPES.NEXT_SLIDE_ERROR,
  payload: { error },
});