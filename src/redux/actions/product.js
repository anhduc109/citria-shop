import { Dispatch } from "redux"
import axios from "axios"

export function addProductToCart(product) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  }
}
