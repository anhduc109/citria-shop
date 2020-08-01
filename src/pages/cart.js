import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CartProductDetail from "../components/CartProductDetail"
import AnimateLink from "../components/AnimateLink"

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0)

  const cart = useSelector(state => state.product.cart)

  useEffect(() => {
    let newTotalPrice = 0
    cart.map(item =>
      setTotalPrice((newTotalPrice += item.price * item.quantity))
    )
  }, [cart])

  return cart.length > 0 ? (
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
              <h3>{totalPrice} VNĐ</h3>
              <AnimateLink
                path="/check-out"
                content={
                  <button className="add-to-cart-btn">
                    Continue to checkout
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Layout>
      <SEO title="Cart" keywords={[`ecommerce`, `cart`, `react`]} />
      <div className="cart-page">
        <div className="container">
          <h3>Your shopping cart is empty</h3>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
