import { takeLatest, select } from "redux-saga/effects"

function* doSomethingWhenAddingProduct(action) {
  const state = yield select()
  yield localStorage.setItem("cart", JSON.stringify(state.product.cart))
}

export default [takeLatest("ADD_PRODUCT_TO_CART", doSomethingWhenAddingProduct)]
