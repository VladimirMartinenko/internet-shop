import ACTION_TYPES from "./types";

export const sliderGetRequest = () => ({
  type: ACTION_TYPES.SLIDER_GET_REQUEST,
  });
export const sliderGetSucces = (slider) => ({
  type: ACTION_TYPES.SLIDER_GET_SUCCESS,
  payload: { values: slider },
  });
export const sliderGetError = (error) => ({
  type: ACTION_TYPES.SLIDER_GET_ERROR,
  payload: { error },
});