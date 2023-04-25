import {put, takeEvery} from 'redux-saga/effects'
import {sectionError,sectionSucces,sectionCreateSucces,sectionCreateError,sectionDeleteSucces,sectionDeleteError, sectionUpdateSucces, sectionUpdateError} from '../actions/sectionActionCreators'
import ACTION_TYPES from '../actions/types'
import * as API from '../../api/http'

function* sectionGetSaga(action) {
  try {
    const {
      data: { data: section },
    } = yield API.sectionGet();
   

    yield put(sectionSucces(section));
  } catch (error) {
    yield put(sectionError(error.response.data.error));
  }
 }
function* sectionCreateSaga(action) {
  try {
    const {
      data: { data: section },
    } = yield API.sectionCreate(action.payload.values);
   
    

    yield put(sectionCreateSucces(section));
  } catch (error) {
    yield put(sectionCreateError(error.response.data.error));
  }
 }
function* sectionDeleteSaga(action) {
  // console.log(action.payload.values.categoryId);
  try {
    const {
      data: { data: sectionId },
    } = yield API.sectionDelete(action.payload.values.sectionId);
   
    

    yield put(sectionDeleteSucces(sectionId.id));
    console.log(sectionId.id)
  } catch (error) {
    yield put(sectionDeleteError(error.response.data.error));
  }
 }
function* sectionUpdateSaga(action) {
  // console.log(action.payload.values.categoryId);
  try {
    const {
      data: { data: section },
    } = yield API.sectionUpdate(action.payload.values);
   
    

    yield put(sectionUpdateSucces(section));
    console.log(section)
  } catch (error) {
    yield put(sectionUpdateError(error.response.data.error));
  }
 }

export default function* sectionsSagas() {
  yield takeEvery(ACTION_TYPES.SECTION_GET_REQUEST, sectionGetSaga);
  yield takeEvery(ACTION_TYPES.SECTION_CREATE_REQUEST, sectionCreateSaga);
  yield takeEvery(ACTION_TYPES.SECTION_DELETE_REQUEST, sectionDeleteSaga);
  yield takeEvery(ACTION_TYPES.SECTION_UPDATE_REQUEST, sectionUpdateSaga);
}