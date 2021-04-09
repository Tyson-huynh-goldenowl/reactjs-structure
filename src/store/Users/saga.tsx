import { call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";
import { USERS } from "../../consts/users.const";
import { fetchUsers } from "../../services/users.api";
import { fetchUserError, fetchUserSuccess } from "./actions";

function* getUsers() {
  yield takeLatest(USERS.fetchUsers, getUsersFromAPI);
}

function* getUsersFromAPI(action: any): SagaIterator {
  try {
    // call the api
    const data = yield call(fetchUsers, {
      response: action.payload,
    });
    console.log('121212121', data);
    // call the success action with data
    yield put(fetchUserSuccess(data));
  } catch (e) {
    // call the error action with data
    yield put(fetchUserError(e));
  }
}

export const sagas = [getUsers];
