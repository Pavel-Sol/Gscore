import { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { BuyProductActionType, BuyProductResponseType, ProductType } from '../../types/types';
import { buyProductAction, getProductsAction } from '../actions';
import { setProducts } from '../reducers';
import { API } from '../services';

function* fetchProductsSaga() {
  try {
    const response: AxiosResponse<ProductType[]> = yield call(API.getProducts);
    yield put(setProducts(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* buyProductSaga(action: BuyProductActionType) {
  const response: AxiosResponse<BuyProductResponseType> = yield call(() => {
    return API.buyProduct(action.payload.priceId);
  });

  console.log('buyProductSaga ', response.data);

  try {
  } catch (error) {
    console.log(error);
  }
}

function* productsSaga() {
  yield takeEvery(getProductsAction, fetchProductsSaga);
  yield takeEvery(buyProductAction, buyProductSaga);
}

export default productsSaga;
