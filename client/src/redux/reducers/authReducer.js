import produce from "immer";
import ACTION_TYPES from "../actions/types";
import CONSTANTS from '../../constants';

const initialState = {
  user: null,
  isLoading: false,
  error: null
};

const requestHandler = produce((draftState, action) => {
  draftState.isLoading = true;});
const handlers = {
  [ACTION_TYPES.LOGIN_REQUEST]: requestHandler,
  [ACTION_TYPES.SIGN_UP_REQUEST]: requestHandler,
  [ACTION_TYPES.REFRESH_REQUEST]: requestHandler,
  [ACTION_TYPES.AUTH_SUCCESS]: produce((draftState, action) => {
    draftState.isLoading = false;
    draftState.error = null;
    draftState.user = action.payload;
  }),
  [ACTION_TYPES.CLEAR_USER_STORE]: produce((draftState, action) => {
    draftState.isLoading = false;
    draftState.error = null;
    draftState.user = null;
  }),
  [ACTION_TYPES.AUTH_ERROR]: produce((draftState, action) => {
    draftState.isLoading = false;
    draftState.error = action.payload;
    draftState.user = null;
  }),

  [ACTION_TYPES.AUTH_REFRESH_ERROR]: produce((draftState, action) => {
    draftState.isLoading = false;
    draftState.error = null;
    localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
    draftState.user = null;
  }),
};

export default function authReducer(state = initialState, action){
  const {type}= action;

  if (handlers[type]){
    return handlers[type](state,action);
  }
  return state;
}