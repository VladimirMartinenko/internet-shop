import produce from "immer";
import ACTION_TYPES from "../actions/types";
import { useSelector } from "react-redux";

const initialState = {
  currentIndices: [0, 2],
  length: null,
};

export default function carouselReducer(state = initialState, action) {
 
  switch (action.type) {
    case ACTION_TYPES.NEXT_SLIDE_SUCCESS:
      console.log('Привет');
      return produce(state, (draftState) => {
        let start, end;
        if (draftState.currentIndices[1] <= draftState.length - 1) {
          console.log('верно');
          start = draftState.currentIndices[0] + 1;
          end = draftState.currentIndices[1] + 1;
          // const { slider } = useSelector(state => state.slider);
        } else {
          console.log(state.length);
          start = 0;
          end = 2;
        }
        console.log(start, end);
        return {
          ...draftState,
          currentIndices: [start, end],
          length:action.payload.values
        };
      });
    // case ACTION_TYPES.SECTION_GET_SUCCESS:
    //   return produce(state, (draftState) => {
    //     draftState.isLoading = false;
    //     draftState.section=(action.payload.values);
    //   });
    // case ACTION_TYPES.SECTION_CREATE_SUCCESS:
    //   // console.log(action.payload.values);
    //   return produce(state, (draftState) => {
    //     draftState.isLoading = false;
    //     draftState.section.push(action.payload.values);
    //   });
    // case ACTION_TYPES.SECTION_DELETE_SUCCESS:
    //   // console.log(action.payload.values);
    //   return produce(state, (draftState) => {
    //     draftState.isLoading = false;
    //     draftState.section= draftState.section.filter((section)=> section.id !== Number(action.payload.values) );
    //   });
    // case ACTION_TYPES.SECTION_UPDATE_SUCCESS:
    //   console.log(action.payload.values.id);
    //   return produce(state, (draftState) => {
    //     draftState.isLoading = false;
    //     draftState.section = draftState.section.map((section)=> {if(section.id === Number(action.payload.values.id)){
    //       return action.payload.values;
    //     }return section} );
    //   });
    // case ACTION_TYPES.SECTION_GET_ERROR:
    // case ACTION_TYPES.SECTION_CREATE_ERROR:
    // case ACTION_TYPES.SECTION_DELETE_ERROR:
    // case ACTION_TYPES.SECTION_UPDATE_ERROR:
    //   return produce(state, (draftState) => {
    //     draftState.isLoading = false;
    //     draftState.error = action.payload.values;
    //   });
    // // return {
    // //   ...state,
    // //   error: action.payload.error,
    // //   isLoading: false,
    // // };

    default:
      return state;
  }
}