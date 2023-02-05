import {put, takeEvery} from 'redux-saga/effects'
import {productGetError,productGetSucces,productCreateSucces,productCreateError} from '../actions/productActionCreators'
import ACTION_TYPES from '../actions/types'
import * as API from '../../api/http'


function* productGetSaga(action) {
  console.log(action.payload.values);
  try {
    const {
      data: { data: product },
    } = yield API.productGet(action.payload.values);
   

    yield put(productGetSucces(product));
  } catch (error) {
    yield put(productGetError(error.response.data.error));
  }
 }

function* productGetByIdSaga(action) {
  console.log(action.payload.values);
  try {
    const {
      data: { data: product },
    } = yield API.productGetById(action.payload.values);
   

    yield put(productGetSucces(product));
  } catch (error) {
    yield put(productGetError(error.response.data.error));
  }
 }
function* productCreateSaga(action) {
  try {
    const {
      data: { data: product },
    } = yield API.productCreate();
   
    

    yield put(productCreateSucces(product));
  } catch (error) {
    yield put(productCreateError(error.response.data.error));
  }
 }

export default function* productSagas() {
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_REQUEST, productGetSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_CREATE_REQUEST, productCreateSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST, productGetByIdSaga);
}