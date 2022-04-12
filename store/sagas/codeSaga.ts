import { SaveCodesActionType } from './../../types/types';
import { API } from './../services/api/api';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ActivateCodeActionType, CodeType } from '../../types/types';
import { activateCodeAction, getCodesAction, saveCodesAction } from '../actions';
import { activateCode, setCodes, setError } from '../reducers';

function* fetchCodesSaga() {
  try {
    yield put(setError(null));
    const response: AxiosResponse<CodeType[]> = yield call(API.getCodes);
    yield put(setCodes(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* activateCodeSaga(action: ActivateCodeActionType) {
  try {
    const response: AxiosResponse<CodeType> = yield call(() => API.activateCode(action.payload));

    if (response.data) {
      yield put(activateCode(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* saveCodesSaga(action: SaveCodesActionType) {
  try {
    yield put(setError(null));
    const response: AxiosResponse<CodeType[]> = yield call(() =>
      API.saveCodes(action.payload.data),
    );

    if (response.data) {
      const response: AxiosResponse<CodeType[]> = yield call(API.getCodes);
      yield put(setCodes(response.data));
    }
  } catch (error: any) {
    console.log(error.response.data.message);
    yield put(setError(error.response.data.message));
  }
}

function* codeSaga() {
  yield takeEvery(getCodesAction, fetchCodesSaga);
  yield takeEvery(activateCodeAction, activateCodeSaga);
  yield takeEvery(saveCodesAction, saveCodesSaga);
}

export default codeSaga;
