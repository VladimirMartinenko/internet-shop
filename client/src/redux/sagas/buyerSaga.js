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

function* buyerCreateSaga(action) {
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

function* buyersGetSaga() {
  // console.log(action.payload.values);
  try {
    const {
      data: { data: buyers },
    } = yield API.buyerGet();
console.log(buyers)
    yield put(buyersGetSucces(buyers));
  } catch (error) {
    yield put(buyersGetError(error.response));
  }
}

// function* productLocalUpdateSaga(action) {
//   // console.log(action.payload.values.value);
//   try {
//     // const {
//     //   data: { data: product },
//     // } = yield API.productGetById(action.payload.values);

//     yield put(productLocalUpdateSucces(action.payload.values));
//   } catch (error) {
//     yield put(productLocalUpdateError(error.response.data.error));
//   }
// }
function* buyerLocalUpdateSaga(action) {
  // console.log(action.payload.values.value);
  try {
    // const {
    //   data: { data: product },
    // } = yield API.productGetById(action.payload.values);

    yield put(buyerLocalUpdateSucces(action.payload.values));
  } catch (error) {
    yield put(buyerLocalUpdateError(error.response.data.error));
  }
}

export default function* buyerSaga() {
  yield takeEvery(ACTION_TYPES.BUYER_CREATE_REQUEST, buyerCreateSaga);
  yield takeEvery(ACTION_TYPES.BUYER_LOCAL_UPDATE_REQUEST, buyerLocalUpdateSaga);
  yield takeEvery(ACTION_TYPES.BUYERS_GET_REQUEST, buyersGetSaga);
}