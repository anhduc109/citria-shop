import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CollectionsPage = () => {
  return (
    <Layout>
      <SEO title="Collections" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="collections-page">
        <div className="container">
          <h3>Collections!</h3>
        </div>
      </div>
    </Layout>
  )
}

export default CollectionsPage
