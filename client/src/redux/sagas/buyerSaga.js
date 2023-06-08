import { put, takeEvery } from "redux-saga/effects";
import {
  buyersGetSucces,
  buyersGetError,
  buyersDeleteSucces,
  buyersDeleteError,
} from "../actions/buyerActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* buyersGetSaga() {
  try {
    const {
      data: { data: buyers },
    } = yield API.buyerGet();
    yield put(buyersGetSucces(buyers));
  } catch (error) {
    yield put(buyersGetError(error.response.data.errors));
  }
}
function* buyersDeleteSaga(action) {
  try {
    const {
      data: { data: buyersId },
    } = yield API.buyerDelete(action.payload.values);

    yield put(buyersDeleteSucces(buyersId.id));
  } catch (error) {
    yield put(buyersDeleteError(error.response.data.error));
  }
}
export default function* buyerSaga() {
  yield takeEvery(ACTION_TYPES.BUYERS_GET_REQUEST, buyersGetSaga);
  yield takeEvery(ACTION_TYPES.BUYERS_DELETE_REQUEST, buyersDeleteSaga);
}
