import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" keywords={[`gatsby`, `404`, `react`]} />
    <div className="container">
      <div className="not-found-page">
        <h3>NOT FOUND</h3>
        <div className="thank-you-content">
          <h6>You just hit a route that doesn't exist. Sadness 😥😥😥</h6>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
