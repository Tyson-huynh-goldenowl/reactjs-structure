import { sagas as homeSaga } from "./Users/saga";
import { fork, all } from "redux-saga/effects";

const allSagas = [...homeSaga];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
