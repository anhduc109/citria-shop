import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About" keywords={[`Citria Gomet`, `Policy`, `ECommerce`]} />
        <div className="about-page">
          <div className="container">
            <h1>About us</h1>
          </div>{" "}
        </div>{" "}
      </Layout>
    )
  }
}
export default About
