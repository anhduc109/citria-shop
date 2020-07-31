import { takeLatest, select } from "redux-saga/effects"

function* saveCartToLocalStorage(action) {
  const state = yield select()
  yield localStorage.setItem("cart", JSON.stringify(state.product.cart))
}

export default [takeLatest("*", saveCartToLocalStorage)]
