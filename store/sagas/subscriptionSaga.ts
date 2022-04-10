import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { CodeType, SubscriptionType, UpgradeSubActionType } from '../../types/types';
import { getSubscriptionsAction, upgradeSubAction } from '../actions';
import { setCodes, setSubscriptions } from '../reducers';
import { API } from '../services';

function* fetchSubscriptionsSaga() {
  try {
    const response: AxiosResponse<SubscriptionType[]> = yield call(API.getSubscriptions);
    yield put(setSubscriptions(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* upgradeSubscriptionSaga(action: UpgradeSubActionType) {
  try {
    const upgradeResponse: AxiosResponse<SubscriptionType> = yield call(() =>
      API.upgradeSubscription(action.payload.data),
    );

    if (upgradeResponse.data) {
      const subsResponse: AxiosResponse<SubscriptionType[]> = yield call(API.getSubscriptions);
      yield put(setSubscriptions(subsResponse.data));

      const codeResponse: AxiosResponse<CodeType[]> = yield call(API.getCodes);
      yield put(setCodes(codeResponse.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* subscriptionSaga() {
  yield takeEvery(getSubscriptionsAction, fetchSubscriptionsSaga);
  yield takeEvery(upgradeSubAction, upgradeSubscriptionSaga);
}

export default subscriptionSaga;
