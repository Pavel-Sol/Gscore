import { AxiosResponse } from 'axios';
import { Console } from 'console';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ProductType } from '../../types/types';
import { getProductsAction } from '../actions';
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

function* productsSaga() {
  yield takeEvery(getProductsAction, fetchProductsSaga);
}

export default productsSaga;
