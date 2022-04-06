import { all } from 'redux-saga/effects';
import { loginSaga, registerSaga, authMeSaga, productsSaga } from './sagas';

export default function* rootSaga() {
  yield all([registerSaga(), loginSaga(), authMeSaga(), productsSaga()]);
}
