import { put, takeEvery } from "redux-saga/effects";
import {
  productGetByIdError,
  productGetByIdSucces,
  productLocalUpdateSucces,
  productLocalUpdateError,
} from "../actions/productActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* productGetByIdSaga(action) {
  console.log(action.payload.values);
  try {
    const {
      data: { data: product },
    } = yield API.productGetById(action.payload.values);

    yield put(productGetByIdSucces(product));
  } catch (error) {
    yield put(productGetByIdError(error.response.data.error));
  }
}

function* productLocalUpdateSaga(action) {
  // console.log(action.payload.values.value);
  try {
    // const {
    //   data: { data: product },
    // } = yield API.productGetById(action.payload.values);

    yield put(productLocalUpdateSucces(action.payload.values));
  } catch (error) {
    yield put(productLocalUpdateError(error.response.data.error));
  }
}

export default function* productSagas() {
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST, productGetByIdSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_LOCAL_UPDATE_REQUEST, productLocalUpdateSaga);
}
