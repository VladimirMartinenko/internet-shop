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
    case ACTION_TYPES.BUYERS_DELETE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.BUYERS_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.buyers=(action.payload.values);
      });
    case ACTION_TYPES.BUYERS_DELETE_SUCCESS:
      console.log(action.payload.values);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.buyers= draftState.buyers.filter((buyers)=> buyers.id !== Number(action.payload.values) );
      });
      case ACTION_TYPES.BUYERS_GET_ERROR:
      case ACTION_TYPES.BUYERS_DELETE_ERROR:
          return produce(state, (draftState) => {
            draftState.isLoading = false;
            draftState.error = action.payload.error;
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