import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  menu:false,
  level:0
};

export default function mobileReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ACTIVE_MBILE_MENU:
      return produce(state, (draftState) => {
        draftState.menu = !draftState.menu;
      });
    case ACTION_TYPES.CHANGES_MBILE_MENU:
      return produce(state, (draftState) => {
        draftState.level = action.payload.values;
      });
      default:
        return state;
  }
}
