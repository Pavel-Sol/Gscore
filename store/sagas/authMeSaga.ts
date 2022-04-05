import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { LoginUserActionType, AuthMeResponseType } from '../../types/types';
import { authMeAction } from '../actions';
import { login, reset, setActiveStep } from '../reducers';
import { API, LS } from '../services';

function* fetchAuthMe() {
  try {
    const response: AxiosResponse<AuthMeResponseType> = yield call(API.authMe);
    // console.log('fetchAuthMe', response.data);
    if (response.data) {
      yield put(login({ userName: response.data.username }));
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
