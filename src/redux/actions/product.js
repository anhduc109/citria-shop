import {
  ADD_CART_FROM_LOCAL_STORAGE,
  ADD_PRODUCT_TO_CART,
  CHANGE_QUANTITY_OF_CART_PRODUCT,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_ALL_FROM_CART,
} from "../type"

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      product,
    },
  }
}

export function changeQuantityOfCartProduct(product) {
  return {
    type: CHANGE_QUANTITY_OF_CART_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProductFromCart(product) {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: {
      product,
    },
  }
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART,
  }
}

export function addCartFromLocalStorage(cart) {
  return {
    type: ADD_CART_FROM_LOCAL_STORAGE,
    payload: {
      cart,
    },
  }
}
