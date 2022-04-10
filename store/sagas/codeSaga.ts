import { API } from './../services/api/api';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ActivateCodeActionType, CodeType } from '../../types/types';
import { activateCodeAction, getCodesAction } from '../actions';
import { activateCode, setCodes } from '../reducers';

function* fetchCodesSaga() {
  try {
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

function* codeSaga() {
  yield takeEvery(getCodesAction, fetchCodesSaga);
  yield takeEvery(activateCodeAction, activateCodeSaga);
}

export default codeSaga;
