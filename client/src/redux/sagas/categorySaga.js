import {put, takeEvery} from 'redux-saga/effects'
import {categoryError,categorySucces,categoryCreateSucces,categoryCreateError,categoryDeleteSucces,categoryDeleteError, categoryUpdateSucces, categoryUpdateError,categoryGetBySectionSucces,categoryGetBySectionError} from '../actions/categoryAction'
import ACTION_TYPES from '../actions/types'
import * as API from '../../api/http'

function* categoryGetSaga(action) {
  try {
    const {
      data: { data: category },
    } = yield API.categoryGet();
   

    yield put(categorySucces(category));
  } catch (error) {
    yield put(categoryError(error.response.data.errors));
  }
 }

function* categoryGetBySectionSaga(action) {
  console.log(action)
  try {
    const {
      data: { data: category },
    } = yield API.categoryGetBySection(action.payload.values);

    yield put(categoryGetBySectionSucces(category));
  } catch (error) {
    yield put(categoryGetBySectionError(error.response.data.errors));
  }
 }
function* categoryCreateSaga(action) {
  try {
    const {
      data: { data: category },
    } = yield API.categoryCreate(action.payload.values);
   
    console.log(category)

    yield put(categoryCreateSucces(category));
  } catch (error) {
    console.log(error);
    yield put(categoryCreateError(error.response.data.errors));
  }
 }
function* categoryDeleteSaga(action) {
  // console.log(action.payload.values.categoryId);
  try {
    const {
      data: { data: categoryId },
    } = yield API.categoryDelete(action.payload.values.categoryId);

    yield put(categoryDeleteSucces(categoryId.id));
    console.log(categoryId)
  } catch (error) {
    // console.log(error.response.data.error)
    yield put(categoryDeleteError(error.response.data.errors));
  }
 }
function* categoryUpdateSaga(action) {
  // console.log(action.payload.values.categoryId);
  try {
    const {
      data: { data: category },
    } = yield API.categoryUpdate(action.payload.values);
   
    

    yield put(categoryUpdateSucces(category));
    console.log(category)
  } catch (error) {
    yield put(categoryUpdateError(error.response.data.errors));
  }
 }

export default function* categorysSagas() {
  yield takeEvery(ACTION_TYPES.CATEGORY_GET_REQUEST, categoryGetSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_CREATE_REQUEST, categoryCreateSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_DELETE_REQUEST, categoryDeleteSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_UPDATE_REQUEST, categoryUpdateSaga);
  yield takeEvery(ACTION_TYPES.CATEGORY_GET_BY_SECTION_REQUEST, categoryGetBySectionSaga);
}