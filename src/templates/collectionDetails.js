import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const CollectionDetails = data => (
  <Layout>
    <SEO
      title={data.data.contentfulCollection.title}
      keywords={[`Citria Gomet`, `Ecommerce`, `Clothing`]}
    />
    <div className="collection-detail-page">
      <div className="container">
        <div className="collection-detail-title">
          <h4>{data.data.contentfulCollection.title}</h4>
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
            className="collection-detail-image col-12 col-sm-12 col-md-12"
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
        fluid(quality: 100) {
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
        fluid(quality: 100) {
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
