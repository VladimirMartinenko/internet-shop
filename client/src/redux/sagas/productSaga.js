import { put, takeEvery } from "redux-saga/effects";
import {
  productGetError,
  productGetSucces,
  productCreateSucces,
  productCreateError,
  productDeleteSucces,
  productDeleteError,
  productDeleteRequest,
  productGetByCategoryRequest,
  productGetByCategoryError,
  productGetByCategorySucces
} from "../actions/productActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* productGetByCategory(action) {
  console.log(action.payload.values);
  try {
    const {
      data: { data: product },
    } = yield API.productGetByCategory(action.payload.values);

    yield put(productGetByCategorySucces(product));
  } catch (error) {
    yield put(productGetByCategoryError(error.response.data.error));
  }
}
function* productGetSaga() {
  try {
    const {
      data: { data: product },
    } = yield API.productGet();

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
  console.log(action);
  try {
    const {
      data: { data: product },
    } = yield API.productCreate(action.payload.values);

    yield put(productCreateSucces(product));
  } catch (error) {
    yield put(productCreateError(error.response.data.error));
  }
}
function* productDeleteSaga(action) {
  // console.log(action.payload.values.productId);
  try {
    const {
      data: { data: productId },
    } = yield API.productDelete(action.payload.values.productId);

    yield put(productDeleteSucces(productId.id));
    console.log(productId.id)
  } catch (error) {
    yield put(productDeleteError(error.response.data.error));
  }
}

export default function* productSagas() {
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_REQUEST, productGetSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_CREATE_REQUEST, productCreateSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST, productGetByIdSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_DELETE_REQUEST, productDeleteSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_REQUEST, productGetByCategory);
}
