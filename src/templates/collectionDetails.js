import React from "react"
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const disqusShortname = "shopper"

const CollectionDetails = data => (
  <Layout>
    <SEO
      title={data.data.contentfulCollection.title}
      keywords={[`gatsby`, `ecommerce`, `react`, `contentFul`, `Snipcart`]}
    />
    {/* <div className="post-thumbnail">
        <Img sizes={data.data.contentfulCollection.featureImage.fluid} />
      </div> */}
    <div className="container">
      <div className="collection-detail-page">
        <h3>{data.data.contentfulCollection.title}</h3>
        <div className="collection-detail-description">
          <p
            dangerouslySetInnerHTML={{
              __html:
                data.data.contentfulCollection.description.childMarkdownRemark
                  .html,
            }}
          />
        </div>
        <Img
          className="collection-detail-image"
          sizes={data.data.contentfulCollection.featureImage.fluid}
        />
        {data.data.contentfulCollection.moreImages.map(item => (
          <Img className="collection-detail-image" sizes={item.fluid} />
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
