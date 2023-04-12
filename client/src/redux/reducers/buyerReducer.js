import produce from "immer";
import ACTION_TYPES from "../actions/types";
// import { useSelector } from "react-redux";

const initialState = {
  buyer: {},
  isLoading: false,
  error: null,
};

export default function buyerReducer(state = initialState, action) {
  
  switch (action.type) {
    case ACTION_TYPES.BUYER_CREATE_REQUEST:
    case ACTION_TYPES.BUYER_LOCAL_UPDATE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.BUYER_CREATE_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.buyer =(action.payload.values);
      });
      case ACTION_TYPES.BUYER_LOCAL_UPDATE_SUCCESS:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          console.log(action.payload.values.value);
          for(let key in draftState.buyer){
            if(key===action.payload.values.name){
             console.log('привет');
             draftState.buyer[key]=(action.payload.values.value);
            }
            console.log(key + ':',draftState.buyer[key]) }
        });
        case ACTION_TYPES.CATEGORY_CREATE_ERROR:
        case ACTION_TYPES.BUYER_LOCAL_UPDATE_ERROR:
          return produce(state, (draftState) => {
            draftState.isLoading = false;
            draftState.error = action.payload.values;
          });
        default:
          return state;
      }
    }
    