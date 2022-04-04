import { all } from 'redux-saga/effects';
import { registerSaga } from './sagas';

export default function* rootSaga() {
  yield all([registerSaga()]);
}
