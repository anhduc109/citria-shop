import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CheckOutPage = () => {
  const cart = useSelector(state => state.product.cart)

  return cart.length > 0 ? (
    <Layout>
      <SEO title="Check Out" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="check-out-page">
        <div className="container">
          <div className="row">
            <div className="check-out-information col-md-8 col-sm-12 col-12">
              <h4>My information</h4>
            </div>
            <div className="check-out-summary col-md-4 col-sm-12 col-12">
              <h4>Your order</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Layout>
      <SEO
        title="Check Out fail"
        keywords={[`Citriavn`, `Citria`, `ecommerce`]}
      />
      <div className="check-out-page">
        <div className="container">
          <h3>Sorry! Your shopping cart is empty. You cannot checkout.</h3>
        </div>
      </div>
    </Layout>
  )
}

export default CheckOutPage
