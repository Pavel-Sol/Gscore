import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';

import { AuthMeResponseType } from 'types/types';
import { authMeAction, login, reset, API, LS } from 'store';

function* fetchAuthMe() {
  try {
    const response: AxiosResponse<AuthMeResponseType> = yield call(API.authMe);
    if (response.data) {
      yield put(login({ userName: response.data.username, userEmail: response.data.email }));
    } else {
      yield call(() => {
        LS.removeToken();
      });
      yield put(reset());
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* authMeSaga() {
  yield takeEvery(authMeAction, fetchAuthMe);
}

export default authMeSaga;
