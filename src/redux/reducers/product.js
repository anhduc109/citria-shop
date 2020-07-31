export default function product(
  state = {
    cart: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload
      return {
        ...state,
        cart: [...state.cart, product],
      }
    }

    default:
      return state
  }
}
