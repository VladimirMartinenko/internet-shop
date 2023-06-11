import { put, takeEvery } from "redux-saga/effects";
import {
  productGetByIdError,
  productGetByIdSucces,
} from "../actions/productActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* productGetByIdSaga(action) {
  try {
    const {
      data: { data: product },
    } = yield API.productGetById(action.payload.values);

    yield put(productGetByIdSucces(product));
  } catch (error) {
    yield put(productGetByIdError(error.response.data.error));
  }
}

export default function* productSagas() {
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST, productGetByIdSaga);
}
