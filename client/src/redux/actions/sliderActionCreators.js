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
export const sliderCreateRequest = (id) => ({
  type: ACTION_TYPES.SLIDER_CREATE_REQUEST,
  payload: { values: id },
  });
export const sliderCreateSucces = (slider) => ({
  type: ACTION_TYPES.SLIDER_CREATE_SUCCESS,
  payload: { values: slider },
  });
export const sliderCreateError = (error) => ({
  type: ACTION_TYPES.SLIDER_CREATE_ERROR,
  payload: { error },
});
export const sliderDeleteRequest = (id) => ({
  type: ACTION_TYPES.SLIDER_DELETE_REQUEST,
  payload: { values: id },
  });
export const sliderDeleteSucces = (slider) => ({
  type: ACTION_TYPES.SLIDER_DELETE_SUCCESS,
  payload: { values: slider },
  });
export const sliderDeleteError = (error) => ({
  type: ACTION_TYPES.SLIDER_DELETE_ERROR,
  payload: { error },
});