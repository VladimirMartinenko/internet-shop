import { put, takeEvery } from "redux-saga/effects";
import {
  buyerCreateSucces,
  buyerCreateError,
  buyerLocalUpdateSucces,
  buyerLocalUpdateError,
  buyersGetSucces,
  buyersGetError
} from "../actions/buyerActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* carouselSaga(action) {
  console.log(action.payload.values);
  try {
    // const {
    //   data: { data: buyer },
    // } = yield API.buyerCreate(action.payload.values);

    yield put(buyerCreateSucces(action.payload.values));
  } catch (error) {
    yield put(buyerCreateError(error.response.data));
  }
};

export default function* buyerSaga() {
  yield takeEvery(ACTION_TYPES.BUYER_CREATE_REQUEST, buyerCreateSaga);
  yield takeEvery(ACTION_TYPES.BUYER_LOCAL_UPDATE_REQUEST, buyerLocalUpdateSaga);
  yield takeEvery(ACTION_TYPES.BUYERS_GET_REQUEST, buyersGetSaga);
}