import { takeLatest } from "redux-saga/effects"

function* doSomethingWhenAddingProduct(action) {
  yield console.log(action)
}

export default [takeLatest("ADD_PRODUCT_TO_CART", doSomethingWhenAddingProduct)]
