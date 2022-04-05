import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { RegisterUserActionType, RegisterResponseType } from '../../types/types';
import { registerUserAction } from '../actions';
import { setActiveStep, setUserError, setUserLoading } from '../reducers';
import { API } from '../services';

function* signUpSaga(action: RegisterUserActionType) {
  try {
    yield put(setUserError(null));
    yield put(setUserLoading(true));
    const response: AxiosResponse<RegisterResponseType> = yield call(() =>
      API.registerUser(action.payload.user),
    );

    if (response.data) {
      yield put(setActiveStep(2));
    }
  } catch (error: any) {
    yield put(setUserError(error.response.data.message));
  } finally {
    yield put(setUserLoading(false));
  }
}

function* registerSaga() {
  yield takeEvery(registerUserAction, signUpSaga);
}

export default registerSaga;
