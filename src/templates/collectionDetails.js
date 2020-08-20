import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const CollectionDetails = data => (
  <Layout>
    <SEO
      title={data.data.contentfulCollection.title}
      keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]}
    />
    <div className="collection-detail-page">
      <div className="container">
        <div className="collection-detail-title">
          <h3>{data.data.contentfulCollection.title}</h3>
        </div>
        {/* <div
          className="collection-detail-description"
          dangerouslySetInnerHTML={{
            __html:
              data.data.contentfulCollection.description.childMarkdownRemark
                .html,
          }}
        ></div> */}
      </div>
      <div className="row">
        <Img
          className="collection-detail-image col-12"
          sizes={data.data.contentfulCollection.featureImage.fluid}
        />
        {data.data.contentfulCollection.moreImages.map(item => (
          <Img
            className="collection-detail-image col-12 col-sm-6 col-md-6"
            sizes={item.fluid}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default CollectionDetails

export const query = graphql`
  query BlogDetailsQuery($slug: String!) {
    contentfulCollection(slug: { eq: $slug }) {
      id
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      featureImage {
        id
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      moreImages {
        id
        fluid {
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
`
