import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { RegisterUserActionType, UserType } from '../../types/types';
import { registerUserAction } from '../actions';
import { setActiveStep } from '../reducers';
import { API } from '../services';

function* signUpSaga(action: RegisterUserActionType) {
  try {
    const response: AxiosResponse<UserType> = yield call(() =>
      API.registerUser(action.payload.user),
    );

    if (response.data) {
      // console.log('signUpSaga ', response.data);
      yield put(setActiveStep(2));
    }
  } catch (error) {
    console.log(error);
  }
}

function* registerSaga() {
  yield takeEvery(registerUserAction, signUpSaga);
}

export default registerSaga;
