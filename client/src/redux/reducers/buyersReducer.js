import produce from "immer";
import ACTION_TYPES from "../actions/types";
// import { useSelector } from "react-redux";

const initialState = {
  buyers: [],
  isLoading: false,
  error: null,
};

export default function buyersReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case ACTION_TYPES.BUYERS_GET_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.BUYERS_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.buyers=(action.payload.values);
      });
      case ACTION_TYPES.BUYERS_GET_ERROR:
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