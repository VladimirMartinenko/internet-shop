// import produce from "immer";
// import ACTION_TYPES from "../actions/types";

// const initialState = {
//   category: [],
//   isLoading: false,
//   error: null,
// };

// export default function categorySectionReducer(state = initialState, action) {
//   // console.log(action);
//   switch (action.type) {
//     case ACTION_TYPES.PRODUCT_GET_REQUEST:
//     case ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_REQUEST:
//     case ACTION_TYPES.PRODUCT_CREATE_REQUEST:
//     case ACTION_TYPES.PRODUCT_DELETE_REQUEST:
//       return produce(state, (draftState) => {
//         draftState.isLoading = true;
//       });
//     case ACTION_TYPES.PRODUCT_GET_SUCCESS:
//       return produce(state, (draftState) => {
//         draftState.isLoading = false;
//         draftState.product=(action.payload.values);
//       });
//     case ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_SUCCESS:
//       return produce(state, (draftState) => {
//         draftState.isLoading = false;
//         draftState.product=(action.payload.values);
//       });
//     case ACTION_TYPES.PRODUCT_CREATE_SUCCESS:
//       return produce(state, (draftState) => {
//         draftState.isLoading = false;
//         draftState.product.push(action.payload.values);
//       });
//     case ACTION_TYPES.PRODUCT_DELETE_SUCCESS:
//       return produce(state, (draftState) => {
//         draftState.isLoading = false;
//         draftState.product= draftState.product.filter((products)=> products.id !== Number(action.payload.values) );
//       });
//     case ACTION_TYPES.PRODUCT_GET_ERROR:
//     case ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_ERROR:
//     case ACTION_TYPES.PRODUCT_CREATE_ERROR:
//     case ACTION_TYPES.PRODUCT_DELETE_ERROR:
//       return produce(state, (draftState) => {
//         draftState.isLoading = false;
//         draftState.error = action.payload.values;
//       });
//     // return {
//     //   ...state,
//     //   error: action.payload.error,
//     //   isLoading: false,
//     // };

//     default:
//       return state;
//   }
// }