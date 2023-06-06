import ACTION_TYPES from "./types";


export const basketCreate = (product) => ({
  type: ACTION_TYPES.BASKET_CREATE,
  payload: { values: product },
  });
export const basketClear = () => ({
  type: ACTION_TYPES.BASKET_CLEAR,
  });
export const basketMinus = (id) => ({
  type: ACTION_TYPES.BASKET_MINUS,
  payload: { values: id}, 
});

export const basketPlus = (id) => ({
  type: ACTION_TYPES.BASKET_PLUS, 
  payload: { values: id},
});

export const basketDelete = (id) => ({
  type: ACTION_TYPES.BASKET_DELETE, 
  payload: { values: id},
});

export const basketSum = () => ({
  type: ACTION_TYPES.BASKET_SUM, 
});