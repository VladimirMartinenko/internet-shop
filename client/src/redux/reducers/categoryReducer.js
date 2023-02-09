import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  category: [],
  isLoading: false,
  error: null,
};

export default function categoryReducer(state = initialState, action) {
 
  switch (action.type) {
    case ACTION_TYPES.CATEGORY_GET_REQUEST:
    case ACTION_TYPES.CATEGORY_CREATE_REQUEST:
    case ACTION_TYPES.CATEGORY_DELETE_REQUEST:
    case ACTION_TYPES.CATEGORY_UPDATE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    case ACTION_TYPES.CATEGORY_GET_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.category.push(...action.payload.values);
      });
    case ACTION_TYPES.CATEGORY_CREATE_SUCCESS:
      // console.log(action.payload.values);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.category.push(action.payload.values);
      });
    case ACTION_TYPES.CATEGORY_DELETE_SUCCESS:
      // console.log(action.payload.values);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.category= draftState.category.filter((categorys)=> categorys.id !== Number(action.payload.values) );
      });
    case ACTION_TYPES.CATEGORY_UPDATE_SUCCESS:
      // console.log(action.payload.values);
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.category = draftState.category.map((categorys)=> {if(categorys.id === Number(action.payload.values)){
categorys.name = action.payload.values.name
        }return categorys} );
      });
    case ACTION_TYPES.CATEGORY_GET_ERROR:
    case ACTION_TYPES.CATEGORY_CREATE_ERROR:
    case ACTION_TYPES.CATEGORY_DELETE_ERROR:
    case ACTION_TYPES.CATEGORY_UPDATE_ERROR:
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
