import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    
    case ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST:
    case ACTION_TYPES.PRODUCT_LOCAL_UPDATE_REQUEST:
    case ACTION_TYPES.PRODUCT_UPDATE_REQUEST:
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
      case ACTION_TYPES.PRODUCT_GET_BY_ID_SUCCESS:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.products=(action.payload.values);
        });
      case ACTION_TYPES.PRODUCT_UPDATE_SUCCESS:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          draftState.products=(action.payload.values);
        });
      case ACTION_TYPES.PRODUCT_LOCAL_UPDATE_SUCCESS:
        return produce(state, (draftState) => {
          draftState.isLoading = false;
          console.log(action.payload.values.value);
          // draftState.products.name=(action.payload.values.value);
          // draftState.products=(action.payload.values);
          for(let key in draftState.products){
            if(key===action.payload.values.name){
             console.log('привет');
             draftState.products[key]=(action.payload.values.value);
            }
            console.log(key + ':',draftState.products[key]) }
        //   for (let[key,value] of draftState.products) {
        //   //   if(key===action.payload.values.name){
        //   //     draftState.products[key]=action.payload.values.value
             
        //   // }
        //   console.log(`${key}: ${value}\n`)
        // }
          
        });
        
    case ACTION_TYPES.PRODUCT_GET_BY_ID_ERROR:
    case ACTION_TYPES.PRODUCT_LOCAL_UPDATE_ERROR:
    case ACTION_TYPES.PRODUCT_UPDATE_ERROR:
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