import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import One from "../images/about/one.png"
import Two from "../images/about/two.png"
import Three from "../images/about/three.png"
import Four from "../images/about/four.png"
import Five from "../images/about/five.png"
import Six from "../images/about/six.png"
import Seven from "../images/about/seven.png"

class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About" keywords={[`Citria Gomet`, `About`, `ECommerce`]} />
        {/* <div className="about-page"> */}
        {/* <div className="container"> */}
        <img src={One} />
        <img src={Two} />
        <img src={Three} />
        <img src={Four} />
        <img src={Five} />
        <img src={Six} />
        <img src={Seven} />
        {/* </div> */}
        {/* </div> */}
      </Layout>
    )
  }
}
export default About
