import ACTION_TYPES from "./types";

export const sectionRequest = () => ({
  type: ACTION_TYPES.SECTION_GET_REQUEST
});
export const sectionSucces = (section) => ({
  type: ACTION_TYPES.SECTION_GET_SUCCESS,
  payload: { values: section },
  });
export const sectionError = (error) => ({
  type: ACTION_TYPES.SECTION_GET_ERROR,
  payload: { error },
});
export const sectionCreateRequest = (section) => ({
  type: ACTION_TYPES.SECTION_CREATE_REQUEST,
  payload: { values: section},
});
export const sectionCreateSucces = (section) => ({
  type: ACTION_TYPES.SECTION_CREATE_SUCCESS,
  payload: { values: section },
  });
export const sectionCreateError = (error) => ({
  type: ACTION_TYPES.SECTION_CREATE_ERROR,
  payload: { error },
});
export const sectionDeleteRequest = (sectionId) => ({
  type: ACTION_TYPES.SECTION_DELETE_REQUEST,
  payload: { values: sectionId},
});
export const sectionDeleteSucces = (sectionId) => ({
  type: ACTION_TYPES.SECTION_DELETE_SUCCESS,
  payload: { values: sectionId },
  });
export const sectionDeleteError = (error) => ({
  type: ACTION_TYPES.SECTION_DELETE_ERROR,
  payload: { error },
});
export const sectionUpdateRequest = (sectionId) => ({
  type: ACTION_TYPES.SECTION_UPDATE_REQUEST,
  payload: { values: sectionId},
});
export const sectionUpdateSucces = (sectionId) => ({
  type: ACTION_TYPES.SECTION_UPDATE_SUCCESS,
  payload: { values: sectionId },
  });
export const sectionUpdateError = (error) => ({
  type: ACTION_TYPES.SECTION_UPDATE_ERROR,
  payload: { error },
});
