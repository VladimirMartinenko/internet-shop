import produce from "immer";
import ACTION_TYPES from "../actions/types";


const initialState = {
  slider: [],
  isLoading: false,
  error: null,
};

export default function sliderReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.SLIDER_GET_REQUEST:
    case ACTION_TYPES.SLIDER_CREATE_REQUEST:
    case ACTION_TYPES.SLIDER_DELETE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.SLIDER_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.slider=(action.payload.values);
      });
    case ACTION_TYPES.SLIDER_CREATE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.slider.push(action.payload.values);
      });
    case ACTION_TYPES.SLIDER_DELETE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.slider= draftState.slider.filter((slider)=> slider.id !== Number(action.payload.values.id) );
      });
      case ACTION_TYPES.SLIDER_GET_ERROR:
      case ACTION_TYPES.SECTION_CREATE_ERROR:
      case ACTION_TYPES.SLIDER_DELETE_ERROR:
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