import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  currentIndices: [0, 2],
  length: null,
};

export default function carouselReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.NEXT_SLIDE_SUCCESS:
      return produce(state, (draftState) => {
        let start, end;
        if (draftState.currentIndices[1] <= draftState.length - 1) {
          start = draftState.currentIndices[0] + 1;
          end = draftState.currentIndices[1] + 1;
        } else {
          console.log(state.length);
          start = 0;
          end = 2;
        }
        return {
          ...draftState,
          currentIndices: [start, end],
          length: action.payload.values,
        };
      });
    default:
      return state;
  }
}
