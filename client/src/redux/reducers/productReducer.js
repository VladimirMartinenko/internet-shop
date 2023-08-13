import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  messagesUpdate: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST:
    case ACTION_TYPES.PRODUCT_UPDATE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
        draftState.messagesUpdate = null;
      });
    case ACTION_TYPES.PRODUCT_GET_BY_ID_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.products = action.payload.values;
      });
    case ACTION_TYPES.PRODUCT_UPDATE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.messagesUpdate = 'Успішно';
        draftState.products = action.payload.values;
      });
    case ACTION_TYPES.PRODUCT_LOCAL_UPDATE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        console.log(action.payload.values.value);
        for (let key in draftState.products) {
          if (key === action.payload.values.name) {
            draftState.products[key] = action.payload.values.value;
          }
        }
      });
    case ACTION_TYPES.PRODUCT_GET_BY_ID_ERROR:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = action.payload.error;
      });
      case ACTION_TYPES.PRODUCT_UPDATE_ERROR:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.error = action.payload.error;
          draftState.messagesUpdate = 'Помилка';
        });

    default:
      return state;
  }
}
