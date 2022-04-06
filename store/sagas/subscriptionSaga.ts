import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SubscriptionType } from '../../types/types';
import { getSubscriptionsAction } from '../actions';
import { setSubscriptions } from '../reducers';
import { API } from '../services';

function* fetchSubscriptionsSaga() {
  try {
    const response: AxiosResponse<SubscriptionType[]> = yield call(API.getSubscriptions);
    yield put(setSubscriptions(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* subscriptionSaga() {
  yield takeEvery(getSubscriptionsAction, fetchSubscriptionsSaga);
}

export default subscriptionSaga;
