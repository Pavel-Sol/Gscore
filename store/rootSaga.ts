import { all } from 'redux-saga/effects';
import {
  loginSaga,
  registerSaga,
  authMeSaga,
  productsSaga,
  subscriptionSaga,
  settingsSaga,
  codeSaga,
} from './sagas';

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    authMeSaga(),
    productsSaga(),
    subscriptionSaga(),
    settingsSaga(),
    codeSaga(),
  ]);
}
