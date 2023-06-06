import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import categorysSagas from "./categorySaga";
import productSagas from "./productSaga";
import productsSagas from "./productsSaga";
import buyerSaga from "./buyerSaga";
import sectionsSagas from "./sectionSaga";
import sliderSaga from "./sliderSaga";

export default function * rootSaga (){
  yield all ([authSagas(),categorysSagas(),productsSagas(),productSagas(),buyerSaga(),sectionsSagas(),sliderSaga()]);
}