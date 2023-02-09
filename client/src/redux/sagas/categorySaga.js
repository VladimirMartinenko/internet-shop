import {put, takeEvery} from 'redux-saga/effects'
import {categoryError,categorySucces,categoryCreateSucces,categoryCreateError,categoryDeleteSucces,categoryDeleteError, categoryUpdateSucces, categoryUpdateError} from '../actions/categoryAction'
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
function* categoryDeleteSaga(action) {
  // console.log(action.payload.values.categoryId);
  try {
    const {
      data: { data: categoryId },
    } = yield API.categoryDelete(action.payload.values.categoryId);
   
    

    yield put(categoryDeleteSucces(categoryId.id));
    console.log(categoryId.id)
  } catch (error) {
    yield put(categoryDeleteError(error.response.data.error));
  }
 }
function* categoryUpdateSaga(action) {
  // console.log(action.payload.values.categoryId);
  try {
    const {
      data: { data: category },
    } = yield API.categoryUpdate(action.payload.values.categoryId);
   
    

    yield put(categoryUpdateSucces(category));
    console.log(category)
  } catch (error) {
    yield put(categoryUpdateError(error.response.data.error));
  }
 }

export default function* categorysSagas() {
  yield takeEvery(ACTION_TYPES.CATEGORY_GET_REQUEST, categoryGetSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_CREATE_REQUEST, categoryCreateSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_DELETE_REQUEST, categoryDeleteSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_UPDATE_REQUEST, categoryUpdateSaga);
}