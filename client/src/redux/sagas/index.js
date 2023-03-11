import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import categorysSagas from "./categorySaga";
import productSagas from "./productSaga";
import productsSagas from "./productsSaga";

export default function * rootSaga (){
  yield all ([authSagas(),categorysSagas(),productsSagas(),productSagas()]);
}