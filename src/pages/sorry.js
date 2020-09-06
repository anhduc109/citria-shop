import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimateLink from "../components/AnimateLink"

const SorryPage = () => {
  return (
    <Layout>
      <SEO title="Sorry" keywords={[`Citria Gomet`, `Sorry`, `ECommerce`]} />
      <div className="thank-you-page">
        <div className="container">
          <h3>Sorry!</h3>
          <div className="thank-you-content">
            <h6>
              There was a problem in our server that we couldn't process your
              order. Please try again{" "}
              <span>
                <AnimateLink path="/check-out" content="here" />
              </span>
              .
            </h6>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SorryPage
