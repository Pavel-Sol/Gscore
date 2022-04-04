import { call, put, takeEvery } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { LoginUserActionType, LoginResponseType } from '../../types/types';
import { loginUserAction } from '../actions';
import { login, setActiveStep } from '../reducers';
import { API, LS } from '../services';

function* signInSaga(action: LoginUserActionType) {
  try {
    const response: AxiosResponse<LoginResponseType> = yield call(() =>
      API.loginUser(action.payload.user),
    );

    if (response.data) {
      yield put(login({ userName: response.data.user.username }));
      yield call(() => {
        LS.saveToken(response.data.token);
      });
      // yield put(setActiveStep(3));
    }
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeEvery(loginUserAction, signInSaga);
}

export default loginSaga;
