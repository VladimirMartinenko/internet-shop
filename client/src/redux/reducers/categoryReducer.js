import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  category: [],
  isLoading: false,
  error: null,
  messagesCreate: null,
  messagesDelete: null,
  messagesUpdate: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CATEGORY_GET_REQUEST:
    case ACTION_TYPES.CATEGORY_CREATE_REQUEST:
    case ACTION_TYPES.CATEGORY_DELETE_REQUEST:
    case ACTION_TYPES.CATEGORY_UPDATE_REQUEST:
    case ACTION_TYPES.CATEGORY_GET_BY_SECTION_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
        draftState.messagesDelete = null;
        draftState.messagesCreate = null;
        draftState.messagesUpdate = null;
      });
    case ACTION_TYPES.CATEGORY_GET_BY_SECTION_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.category = action.payload.values;
      });
    case ACTION_TYPES.CATEGORY_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.category = action.payload.values;
      });
    case ACTION_TYPES.CATEGORY_CREATE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesCreate = 'Успішно';
        draftState.category.push(action.payload.values);
      });
    case ACTION_TYPES.CATEGORY_DELETE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesDelete = 'Успішно';
        draftState.category = draftState.category.filter(
          (categorys) => categorys.id !== Number(action.payload.values)
        );
      });
    case ACTION_TYPES.CATEGORY_UPDATE_SUCCESS:
      console.log(action.payload.values.id);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesUpdate = 'Успішно';
        draftState.category = draftState.category.map((categorys) => {
          if (categorys.id === Number(action.payload.values.id)) {
            return action.payload.values;
          }
          return categorys;
        });
      });
    case ACTION_TYPES.CATEGORY_GET_ERROR:
    case ACTION_TYPES.CATEGORY_GET_BY_SECTION_ERROR:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = action.payload.error;
      });
      case ACTION_TYPES.CATEGORY_CREATE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.messagesCreate = 'Помилка';
          draftState.error = action.payload.error;
        });
      case ACTION_TYPES.CATEGORY_DELETE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.messagesDelete = 'Помилка';
          draftState.error = action.payload.error;
        });
      case ACTION_TYPES.CATEGORY_UPDATE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.messagesUpdate = 'Помилка';
          draftState.error = action.payload.error;
        });
    default:
      return state;
  }
}
