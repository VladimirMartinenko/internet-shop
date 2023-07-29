import { put, takeEvery } from "redux-saga/effects";
import {
  productGetError,
  productGetSucces,
  productCreateSucces,
  productCreateError,
  productDeleteSucces,
  productDeleteError,
  productGetByCategoryError,
  productGetByCategorySucces,
  productUpdateSucces,
  productUpdateError
} from "../actions/productActionCreators";
import ACTION_TYPES from "../actions/types";
import * as API from "../../api/http";

function* productGetByCategory(action) {
  try {
    const {
      data: { data: product },
    } = yield API.productGetByCategory(action.payload.values);
    yield put(productGetByCategorySucces(product));
  } catch (error) {
    yield put(productGetByCategoryError(error.response.data.errors));
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

// function* productGetByIdSaga(action) {
//   console.log(action.payload.values);
//   try {
//     const {
//       data: { data: product },
//     } = yield API.productGetById(action.payload.values);

//     yield put(productGetSucces(product));
//   } catch (error) {
//     yield put(productGetError(error.response.data.error));
//   }
// }
function* productCreateSaga(action) {
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
  try {
    const {
      data: { data: productId },
    } = yield API.productDelete(action.payload.values.productId);

    yield put(productDeleteSucces(productId.id));
  } catch (error) {
    yield put(productDeleteError(error.response.data.error));
  }
}

function* productUpdateSaga(action) {
  try {
    const {
      data: { data: productId },
    } = yield API.productUpdate(action.payload.values,action.payload.data);
    yield put(productUpdateSucces(productId));
  } catch (error) {
    yield put(productUpdateError(error.response.data.error));
  }
}

export default function* productsSagas() {
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_REQUEST, productGetSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_CREATE_REQUEST, productCreateSaga);
  // yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_ID_REQUEST, productGetByIdSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_DELETE_REQUEST, productDeleteSaga);
  yield takeEvery(ACTION_TYPES.PRODUCT_GET_BY_CATEGORY_REQUEST, productGetByCategory);
  yield takeEvery(ACTION_TYPES.PRODUCT_UPDATE_REQUEST, productUpdateSaga);
}
