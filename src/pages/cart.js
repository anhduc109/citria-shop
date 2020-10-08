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
      <SEO title="Cart" keywords={[`Citria Gomet`, `Cart`, `ECommerce`]} />
      <div className="cart-page">
        <div className="container">
          <h4>SHOPPING CART</h4>
          <div className="row">
            <div className="cart-items-detail col-md-7">
              <div className="container">
                {cart.map(item => (
                  <CartProductDetail key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="cart-total col-md-5">
              <div className="container">
                <h4>TOTAL PRICE</h4>
                <h5>{totalPrice} VNĐ</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <br />
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
      </div>
    </Layout>
  ) : (
    <Layout>
      <SEO title="Cart" keywords={[`Citria Gomet`, `Ecommerce`, `Cart`]} />
      <div className="cart-page">
        <div className="container">
          <h4>YOUR SHOPPING CART IS EMPTY!</h4>
          <div className="thank-you-content">
            <h6>
              You can add your favorite products to shopping cart by going to{" "}
              <span>
                <AnimateLink path="/store" content="Store"></AnimateLink>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
