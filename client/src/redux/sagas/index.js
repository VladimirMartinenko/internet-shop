import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import categorysSagas from "./categorySaga";
import productSagas from "./productSaga";

export default function * rootSaga (){
  yield all ([authSagas(),categorysSagas(),productSagas()]);
}