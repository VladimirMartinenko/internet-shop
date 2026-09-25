import produce from "immer";
import ACTION_TYPES from "../actions/types";
import { lineCartKey, parseSizes } from "../../utils/productSizes";

const initialState = {
  items: JSON.parse(window.localStorage.getItem("basket") || "[]"),
  isLoading: false,
  error: null,
  totalSumm: 0,
  count: 0,
};

function stockForLine(item) {
  const sizes = parseSizes(item);
  if (sizes.length && item.size) {
    const row = sizes.find((size) => size.name === item.size);
    return row ? Number(row.quantity) : 0;
  }
  return Number(item.quantity);
}

export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.BASKET_CREATE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        const incoming = action.payload.values;
        const key = incoming.cartKey || lineCartKey(incoming);
        const existing = state.items.find((item) => lineCartKey(item) === key);
        const nextCount = existing ? existing.count + 1 : 1;
        const max = stockForLine({ ...incoming, cartKey: key });
        if (Number.isFinite(max) && nextCount > max) {
          draftState.items = state.items;
          return;
        }
        draftState.items = existing
          ? state.items.map((item) =>
              lineCartKey(item) === key
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.items, { ...incoming, cartKey: key, count: 1 }];
      });
    case ACTION_TYPES.BASKET_CLEAR:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.items = [];
      });
    case ACTION_TYPES.BASKET_DELETE:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        const key = String(action.payload.values);
        draftState.items = draftState.items.filter(
          (item) => lineCartKey(item) !== key
        );
      });
    case ACTION_TYPES.BASKET_SUM:
      return produce(state, (draftState) => {
        draftState.totalSumm = state.items.reduce(
          (prev, { count, price }) => prev + count * Number(price),
          0
        );
        draftState.count = state.items.length;
      });
    case ACTION_TYPES.BASKET_PLUS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        const key = String(action.payload.values);
        draftState.items = state.items.map((item) => {
          if (lineCartKey(item) !== key) {
            return item;
          }
          const max = stockForLine(item);
          if (Number.isFinite(max) && item.count >= max) {
            return item;
          }
          return { ...item, count: item.count + 1 };
        });
      });
    case ACTION_TYPES.BASKET_MINUS:
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        const key = String(action.payload.values);
        draftState.items = state.items.map((item) =>
          lineCartKey(item) === key && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        );
      });

    default:
      return state;
  }
}
