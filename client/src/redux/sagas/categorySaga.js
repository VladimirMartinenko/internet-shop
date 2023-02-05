import {put, takeEvery} from 'redux-saga/effects'
import {categoryError,categorySucces,categoryCreateSucces,categoryCreateError} from '../actions/categoryAction'
import ACTION_TYPES from '../actions/types'
import * as API from '../../api/http'

function* categoryGetSaga(action) {
  try {
    const {
      data: { data: category },
    } = yield API.categoryGet();
   

    yield put(categorySucces(category));
  } catch (error) {
    yield put(categoryError(error.response.data.error));
  }
 }
function* categoryCreateSaga(action) {
  try {
    const {
      data: { data: category },
    } = yield API.categoryCreate(action.payload.values);
   
    

    yield put(categoryCreateSucces(category));
  } catch (error) {
    yield put(categoryCreateError(error.response.data.error));
  }
 }

export default function* categorysSagas() {
  yield takeEvery(ACTION_TYPES.CATEGORY_GET_REQUEST, categoryGetSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_CREATE_REQUEST, categoryCreateSaga);
}