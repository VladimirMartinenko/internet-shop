import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  buyer: {},
  isLoading: false,
  error: null,
};

export default function buyerReducer(state = initialState, action) {
  switch (action.type) {
    
    case ACTION_TYPES.BUYER_CREATE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.buyer = action.payload.values;
      });
    case ACTION_TYPES.BUYER_LOCAL_UPDATE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        console.log(action.payload.values.value);
        for (let key in draftState.buyer) {
          if (key === action.payload.values.name) {
            draftState.buyer[key] = action.payload.values.value;
          }
        }
      });
    default:
      return state;
  }
}
