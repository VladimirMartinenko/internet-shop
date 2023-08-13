import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  section: [],
  isLoading: false,
  error: null,
  messagesCreate: null,
  messagesDelete: null,
  messagesUpdate: null,
};

export default function sectionReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.SECTION_GET_REQUEST:
    case ACTION_TYPES.SECTION_CREATE_REQUEST:
    case ACTION_TYPES.SECTION_DELETE_REQUEST:
    case ACTION_TYPES.SECTION_UPDATE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
        draftState.messagesDelete = null;
        draftState.messagesCreate = null;
        draftState.messagesUpdate = null;
      });
    case ACTION_TYPES.SECTION_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.section = action.payload.values;
      });
    case ACTION_TYPES.SECTION_CREATE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesCreate = 'Успішно';
        draftState.section.push(action.payload.values);
      });
    case ACTION_TYPES.SECTION_DELETE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesDelete = 'Успішно';
        draftState.section = draftState.section.filter(
          (section) => section.id !== Number(action.payload.values)
        );
      });
    case ACTION_TYPES.SECTION_UPDATE_SUCCESS:
      console.log(action.payload.values.id);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesUpdate = 'Успішно';
        draftState.section = draftState.section.map((section) => {
          if (section.id === Number(action.payload.values.id)) {
            return action.payload.values;
          }
          return section;
        });
      });
    // case ACTION_TYPES.SECTION_GET_ERROR:
    // case ACTION_TYPES.SECTION_DELETE_ERROR:
    // case ACTION_TYPES.SECTION_UPDATE_ERROR:
    //   return produce(state, (draftState) => {
    //     draftState.isLoading = false;
    //     draftState.error = action.payload.error;
    //   });
      case ACTION_TYPES.SECTION_CREATE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.messagesCreate = 'Помилка';
          draftState.error = action.payload.error;
        });
      case ACTION_TYPES.SECTION_DELETE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.messagesDelete = 'Помилка';
          draftState.error = action.payload.error;
        });
      case ACTION_TYPES.SECTION_UPDATE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.messagesUpdate = 'Помилка';
          draftState.error = action.payload.error;
        });
    default:
      return state;
  }
}
