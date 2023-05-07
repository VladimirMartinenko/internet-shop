import { put, takeEvery } from "redux-saga/effects";
import {
  sliderGetSucces,
  sliderGetError
} from "../actions/sliderActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* sliderGetSaga() {
  // console.log(action.payload.values);
  try {
    const {
      data: { data: slider },
    } = yield API.sliderGet();
console.log(slider)
    yield put(sliderGetSucces(slider));
  } catch (error) {
    yield put(sliderGetError(error.response));
  }
}

export default function* sliderSaga() {
  yield takeEvery(ACTION_TYPES.SLIDER_GET_REQUEST, sliderGetSaga);
}