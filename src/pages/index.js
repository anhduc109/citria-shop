import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import { graphql } from "gatsby"

const IndexPage = data => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `oneshopper`, `react`, `Ecommerce`]}
    />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1000, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`
