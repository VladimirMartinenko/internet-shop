import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  section: [],
  isLoading: false,
  error: null,
};

export default function sectionReducer(state = initialState, action) {
 
  switch (action.type) {
    case ACTION_TYPES.SECTION_GET_REQUEST:
    case ACTION_TYPES.SECTION_CREATE_REQUEST:
    case ACTION_TYPES.SECTION_DELETE_REQUEST:
    case ACTION_TYPES.SECTION_UPDATE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.SECTION_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.section=(action.payload.values);
      });
    case ACTION_TYPES.SECTION_CREATE_SUCCESS:
      // console.log(action.payload.values);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.section.push(action.payload.values);
      });
    case ACTION_TYPES.SECTION_DELETE_SUCCESS:
      // console.log(action.payload.values);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.section= draftState.section.filter((section)=> section.id !== Number(action.payload.values) );
      });
    case ACTION_TYPES.SECTION_UPDATE_SUCCESS:
      console.log(action.payload.values.id);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = null;
        draftState.section = draftState.section.map((section)=> {if(section.id === Number(action.payload.values.id)){
          return action.payload.values;
        }return section} );
      });
    case ACTION_TYPES.SECTION_GET_ERROR:
    case ACTION_TYPES.SECTION_CREATE_ERROR:
    case ACTION_TYPES.SECTION_DELETE_ERROR:
    case ACTION_TYPES.SECTION_UPDATE_ERROR:
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
