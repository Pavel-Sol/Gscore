import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';

import { ChangeInfoResponseType, PersonalInfoActionType, ChangePassActionType } from 'types';
import {
  personalInfoAction,
  changePassAction,
  login,
  setUserError,
  setUserLoading,
  API,
} from 'store';

function* changePersonalInfoSaga(action: PersonalInfoActionType) {
  try {
    yield put(setUserLoading(true));
    const response: AxiosResponse<ChangeInfoResponseType> = yield call(() =>
      API.changePersonalInfo(action.payload.data),
    );

    if (response.data) {
      yield put(login({ userName: response.data.username, userEmail: response.data.email }));
    }
  } catch (error: any) {
    console.log(error);
  } finally {
    yield put(setUserLoading(false));
  }
}

function* changePassSaga(action: ChangePassActionType) {
  try {
    yield put(setUserError(null));
    yield put(setUserLoading(true));
    const response: AxiosResponse<ChangeInfoResponseType> = yield call(() =>
      API.changePassword(action.payload.data),
    );
  } catch (error: any) {
    yield put(setUserError(error.response.data.message));
    console.log(error);
  } finally {
    yield put(setUserLoading(false));
  }
}

function* settingsSaga() {
  yield takeEvery(personalInfoAction, changePersonalInfoSaga);
  yield takeEvery(changePassAction, changePassSaga);
}

export default settingsSaga;
