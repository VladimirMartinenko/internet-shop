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
export const categoryGetBySectionRequest = (sectionId) => ({
  type: ACTION_TYPES.CATEGORY_GET_BY_SECTION_REQUEST,
  payload: {values: sectionId}
});
export const categoryGetBySectionSucces = (category) => ({
  type: ACTION_TYPES.CATEGORY_GET_BY_SECTION_SUCCESS,
  payload: { values: category },
  });
export const categoryGetBySectionError = (error) => ({
  type: ACTION_TYPES.CATEGORY_GET_BY_SECTION_ERROR,
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
export const categoryDeleteRequest = (categoryId) => ({
  type: ACTION_TYPES.CATEGORY_DELETE_REQUEST,
  payload: { values: categoryId},
});
export const categoryDeleteSucces = (categoryId) => ({
  type: ACTION_TYPES.CATEGORY_DELETE_SUCCESS,
  payload: { values: categoryId },
  });
export const categoryDeleteError = (error) => ({
  type: ACTION_TYPES.CATEGORY_DELETE_ERROR,
  payload: { error },
});
export const categoryUpdateRequest = (categoryId) => ({
  type: ACTION_TYPES.CATEGORY_UPDATE_REQUEST,
  payload: { values: categoryId},
});
export const categoryUpdateSucces = (categoryId) => ({
  type: ACTION_TYPES.CATEGORY_UPDATE_SUCCESS,
  payload: { values: categoryId },
  });
export const categoryUpdateError = (error) => ({
  type: ACTION_TYPES.CATEGORY_UPDATE_ERROR,
  payload: { error },
});
