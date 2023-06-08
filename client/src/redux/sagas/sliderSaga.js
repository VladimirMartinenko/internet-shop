import { put, takeEvery } from "redux-saga/effects";
import {
  sliderGetSucces,
  sliderGetError,
  sliderCreateSucces,
  sliderCreateError,
  sliderDeleteSucces,
  sliderDeleteError,
} from "../actions/sliderActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* sliderGetSaga() {
  try {
    const {
      data: { data: slider },
    } = yield API.sliderGet();
    yield put(sliderGetSucces(slider));
  } catch (error) {
    yield put(sliderGetError(error.response));
  }
}
function* sliderCreateSaga(action) {
  console.log(action.payload.values.productId);
  try {
    const {
      data: { data: slider },
    } = yield API.sliderCreate(action.payload.values);

    yield put(sliderCreateSucces(slider));
  } catch (error) {
    yield put(sliderCreateError(error.response.data.error));
  }
}
function* sliderDeleteSaga(action) {
  try {
    const {
      data: { data: sliderId },
    } = yield API.sliderDelete(action.payload.values.sliderId);

    yield put(sliderDeleteSucces(sliderId));
  } catch (error) {
    yield put(sliderDeleteError(error.response.data.error));
  }
}
export default function* sliderSaga() {
  yield takeEvery(ACTION_TYPES.SLIDER_GET_REQUEST, sliderGetSaga);
  yield takeEvery(ACTION_TYPES.SLIDER_CREATE_REQUEST, sliderCreateSaga);
  yield takeEvery(ACTION_TYPES.SLIDER_DELETE_REQUEST, sliderDeleteSaga);
}
