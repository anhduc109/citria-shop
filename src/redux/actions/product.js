export function addProductToCart(product) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  }
}

export function addCartFromLocalStorage(cart) {
  return {
    type: "ADD_CART_FROM_LOCAL_STORAGE",
    payload: {
      cart,
    },
  }
}
