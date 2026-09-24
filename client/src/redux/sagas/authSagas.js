import { takeLatest, put } from "redux-saga/effects";
import ACTION_TYPES from "../actions/types";
import * as HTTP_API from "../../api/http";
import AuthActionCreators from "../actions/authActionCreators";

function* loginSaga(action) {
  try {
    const {
      data: {
        data: { user },
      },
    } = yield HTTP_API.login(action.payload);
    yield put(AuthActionCreators.authSuccess(user));
   
  } catch (error) {
    const errors =
      (error.response && error.response.data && error.response.data.errors) ||
      [{ message: "server unavailable" }];
    yield put(AuthActionCreators.authError(errors));
    console.log(errors);
  }
}
function* refreshSaga(action) {
  try {
    const {
      data: {
        data: { user },
      },
    } = yield HTTP_API.refresh(action.payload);
    yield put(AuthActionCreators.authSuccess(user));
  } catch (error) {
    yield put(AuthActionCreators.authRefreshError(error));
  }
}
function* signupSaga(action) {
  try {
    const {
      data: {
        data: { user },
      },
    } = yield HTTP_API.signup(action.payload);

    yield put(AuthActionCreators.authSuccess(user));
  } catch (error) {
    const errors =
      (error.response && error.response.data && error.response.data.errors) ||
      [{ message: "server unavailable" }];
    yield put(AuthActionCreators.authError(errors));
  }
}

export default function* authSagas() {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginSaga);
  yield takeLatest(ACTION_TYPES.REFRESH_REQUEST, refreshSaga);
  yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signupSaga);
}
