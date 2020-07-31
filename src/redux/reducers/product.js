import {
  ADD_CART_FROM_LOCAL_STORAGE,
  ADD_PRODUCT_TO_CART,
  CHANGE_QUANTITY_OF_CART_PRODUCT,
  REMOVE_PRODUCT_FROM_CART,
} from "../type"

export default function product(
  state = {
    cart: [],
  },
  action
) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { product } = action.payload

      if (state.cart.find(item => item.id === product.id)) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity === 20 ? item.quantity : (item.quantity += 1),
                }
              : item
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, product],
        }
      }
    }

    case ADD_CART_FROM_LOCAL_STORAGE: {
      const { cart } = action.payload
      return {
        ...state,
        cart,
      }
    }

    case CHANGE_QUANTITY_OF_CART_PRODUCT: {
      const { product } = action.payload

      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        ),
      }
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const { product } = action.payload

      return {
        ...state,
        cart: state.cart.filter(item => item.id !== product.id),
      }
    }

    default:
      return state
  }
}
