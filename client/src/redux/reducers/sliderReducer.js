import produce from "immer";
import ACTION_TYPES from "../actions/types";


const initialState = {
  slider: [],
  isLoading: false,
  error: null,
};

export default function sliderReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case ACTION_TYPES.SLIDER_GET_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.SLIDER_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.slider=(action.payload.values);
      });
      case ACTION_TYPES.SLIDER_GET_ERROR:
          return produce(state, (draftState) => {
            draftState.isLoading = false;
            draftState.error = action.payload.values;
          });
        // return {
        //   ...state,
        //   error: action.payload.error,
        //   isLoading: false,
        // };
    
        default:
          return state;
      }
    }