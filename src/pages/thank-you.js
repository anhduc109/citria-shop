import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYouPage = () => {
  return (
    <Layout>
      <SEO title="Thank You" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="thank-you-page">
        <div className="container">
          <h1>THANK YOU!</h1>
          <h6>
            We are getting started on your order right away, and you will
            receive an order confirmation call from our Customer Service. In the
            mean time, explore the latest fashion collection and get inspired by
            new trends at Collection
          </h6>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYouPage
