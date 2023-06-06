import produce from "immer";
import ACTION_TYPES from "../actions/types";

const initialState = {
  items: JSON.parse(window.localStorage.getItem("basket") || "[]"),
  isLoading: false,
  error: null,
  totalSumm: 0,
  count:0
};
export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    
    case ACTION_TYPES.BASKET_CREATE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        // draftState.items.push(action.payload.values);
        const products = state.items.find(
          (n) => n.id === action.payload.values.id
        );
        console.log(products);
        draftState.items = [
          // ...state,
          ...(products
            ? state.items.map((n) =>
                n === products ? { ...n, count: n.count + 1 } : n
              )
            : [...state.items, { ...action.payload.values, count: 1 }]),
        ];
        // let i;

        // draftState.totalSumm=i;
      });
    case ACTION_TYPES.BASKET_CLEAR:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.items = [];
      });
    case ACTION_TYPES.BASKET_DELETE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.isLoading = false;
        draftState.items = draftState.items.filter(
          (items) => items.id !== Number(action.payload.values)
        );
      });
    case ACTION_TYPES.BASKET_SUM:
      return produce(state, (draftState) => {
        draftState.totalSumm = state.items.reduce(
          (prev, { count, price }) => prev + count * Number(price),
          0
        );
        draftState.count=state.items.length
      });
    case ACTION_TYPES.BASKET_PLUS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.items = state.items.map((n) =>
          n.id === action.payload.values ? { ...n, count: n.count + 1 } : n
        );
      });
    case ACTION_TYPES.BASKET_MINUS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.items = state.items.map((n) =>
          n.id === action.payload.values && n.count > 1
            ? { ...n, count: n.count - 1 }
            : n
        );
      });
    
    default:
      return state;
  }
}
