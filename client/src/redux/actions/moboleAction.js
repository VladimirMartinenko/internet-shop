import ACTION_TYPES from "./types";

export const mobileMenu = () => ({
  type: ACTION_TYPES.ACTIVE_MBILE_MENU, 
});

export const ChangesMobileMenu = (number) => ({
  type: ACTION_TYPES.CHANGES_MBILE_MENU,
  payload: { values: number}, 
});