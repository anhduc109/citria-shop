import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateLink from "../components/AnimateLink"

const ThankYouPage = () => {
  return (
    <Layout>
      <SEO
        title="Thank You"
        keywords={[`Citria Gomet`, `Thank you`, `ECommerce`]}
      />
      <div className="thank-you-page">
        <div className="container">
          <h4>THANK YOU!</h4>
          <div className="thank-you-content">
            <h6>
              We are getting started on your order right away, and you will
              receive an order confirmation call from our Customer Service. In
              the mean time, explore the latest fashion collection and get
              inspired by new trends at{" "}
              <span>
                <AnimateLink
                  path="/collections"
                  content="Collections"
                ></AnimateLink>
              </span>
            </h6>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYouPage
