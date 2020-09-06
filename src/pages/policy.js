import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Policy"
          keywords={[`Citria Gomet`, `Policy`, `ECommerce`]}
        />
        <div className="policy-page">
          <div className="container">
            <h1>Policy</h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
