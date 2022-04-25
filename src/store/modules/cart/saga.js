import {all, takeLatest, select, call, put} from 'redux-saga/effects';

import api from '../../../services/api';
import formatValue from '../../../utils/formatValue';

import {addToCartSuccess} from './actions';

function* addToCart({id}) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id),
  );

  if (productExists) {
    // opaaa
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
