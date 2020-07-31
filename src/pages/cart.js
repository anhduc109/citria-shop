import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CartPage = () => {
  return (
    <Layout>
      <SEO title="Cart" keywords={[`ecommerce`, `cart`, `react`]} />
      <div className="cart-page">
        <div className="container">
          <h1>This is Cart</h1>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
