import { API } from './../services/api/api';
import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { CodeType } from '../../types/types';
import { getCodesAction } from '../actions';
import { setCodes } from '../reducers';

function* fetchCodesSaga() {
  try {
    const response: AxiosResponse<CodeType[]> = yield call(API.getCodes);
    yield put(setCodes(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* codeSaga() {
  yield takeEvery(getCodesAction, fetchCodesSaga);
}

export default codeSaga;
