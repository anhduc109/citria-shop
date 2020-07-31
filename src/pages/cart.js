import React from "react"
import { useSelector } from "react-redux"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
                <div key={item.id} className="row">
                  <Img fluid={item.img} className="col-md-3 col-sm-6 col-4" />
                  <div className="cart-item-detail col-md-5 col-sm-6 col-8">
                    <h3>{item.name}</h3>
                    <h4>Price: {item.price} VNĐ</h4>
                    <h4>Size: S</h4>
                  </div>
                </div>
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
