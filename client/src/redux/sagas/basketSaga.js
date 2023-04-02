import { put, takeEvery } from "redux-saga/effects";
import ACTION_TYPES from "../actions/types";
// import * as API from '../../api/http'
import {
  basketCreateSucces,
  basketCreateError,
  basketClearSucces,
  basketClearError,
  basketMinusSucces,
  basketMinusError,
  basketPlusSucces,
  basketPlusError,
  basketDeleteSucces,
  basketDeleteError,
  basketSumSucces,
  basketSumError
} from "../actions/basketActionCreators";

function* basketCreateSaga(action) {
  console.log(action.payload.values);
  try {
    // const {
    //   data: { data: items },
    // } = yield API.productGetById(action.payload.values);

    yield put(basketCreateSucces(action.payload.values));
  } catch (error) {
    yield put(basketCreateError(error.response.data.error));
  }
}

function* basketClearSaga() {
  // console.log(action.payload.values);
  try {
    // const {
    //   data: { data: items },
    // } = yield API.productGetById(action.payload.values);

    yield put(basketClearSucces());
  } catch (error) {
    yield put(basketClearError(error.response.data.error));
  }
}

function* basketMinusSaga(action) {
  // console.log(action.payload.values);
  try {
    // const {
    //   data: { data: items },
    // } = yield API.productGetById(action.payload.values);

    yield put(basketMinusSucces(action.payload.values));
  } catch (error) {
    yield put(basketMinusError(error.response.data.error));
  }
}

function* basketPlusSaga(action) {
  // console.log(action.payload.values);
  try {
    // const {
    //   data: { data: items },
    // } = yield API.productGetById(action.payload.values);

    yield put(basketPlusSucces(action.payload.values));
  } catch (error) {
    yield put(basketPlusError(error.response.data.error));
  }
}

function* basketDeleteSaga(action) {
  // console.log(action.payload.values);
  try {
    // const {
    //   data: { data: items },
    // } = yield API.productGetById(action.payload.values);

    yield put(basketDeleteSucces(action.payload.values));
  } catch (error) {
    yield put(basketDeleteError(error.response.data.error));
  }
}

function* basketSumSaga() {
  // console.log(action.payload.values);
  try {
    // const {
    //   data: { data: items },
    // } = yield API.productGetById(action.payload.values);

    yield put(basketSumSucces());
  } catch (error) {
    yield put(basketSumError(error.response.data.error));
  }
}

export default function* basketSaga() {
  yield takeEvery(ACTION_TYPES.BASKET_CREATE_REQUEST, basketCreateSaga);
  yield takeEvery(ACTION_TYPES.BASKET_CLEAR_REQUEST, basketClearSaga);
  yield takeEvery(ACTION_TYPES.BASKET_MINUS_REQUEST, basketMinusSaga);
  yield takeEvery(ACTION_TYPES.BASKET_PLUS_REQUEST, basketPlusSaga);
  yield takeEvery(ACTION_TYPES.BASKET_DELETE_REQUEST, basketDeleteSaga);
  yield takeEvery(ACTION_TYPES.BASKET_SUM_REQUEST, basketSumSaga);
}
