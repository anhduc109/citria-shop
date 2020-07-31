import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CartProductDetail from "../components/CartProductDetail"

const CartPage = () => {
  const cart = useSelector(state => state.product.cart)

  return (
    <Layout>
      <SEO title="Cart" keywords={[`ecommerce`, `cart`, `react`]} />
      <div className="cart-page">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="row">
            <div className="cart-items-detail col-md-7">
              {cart.map(item => (
                <CartProductDetail key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-total col-md-5">
              <h3>Total Price</h3>
              <h3>100 VNĐ</h3>
              <button className="add-to-cart-btn">Continue to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
