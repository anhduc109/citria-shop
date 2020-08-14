import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import AnimateLink from "../components/AnimateLink"

class IndexPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NoOfPost: 6,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    var lastScrollY = window.pageYOffset + 1100

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3
      this.setState({
        NoOfPost: count,
      })
    }
  }

  render() {
    const { data } = this.props
    const { NoOfPost } = this.state

    return (
      <React.Fragment>
        <div className="row product-main" onScroll={this.onScrollEvent}>
          {data.data.allContentfulCollection.edges
            .slice(0, NoOfPost)
            .map(items => (
              <div
                className="Catalogue__item col-sm-12 col-md-6 col-lg-6"
                key={items.node.id}
              >
                <div className="details_List">
                  {items.node.image === null ? (
                    <div className="no-image">No Image</div>
                  ) : (
                    <Img fluid={items.node.featureImage.fluid} />
                  )}

                  <div className="details_inner">
                    <AnimateLink
                      path={`/collections/${items.node.slug}`}
                      content={<h5>{items.node.title}</h5>}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}

const CollectionsPage = data => (
  <Layout>
    <SEO title="Store" keywords={[`gatsby`, `store`, `react`]} />
    <div className="container">
      <div className="collections-page">
        <IndexPost data={data}></IndexPost>
      </div>
    </div>
  </Layout>
)

export default CollectionsPage

export const query = graphql`
  query CollectionQuery {
    allContentfulCollection {
      edges {
        node {
          id
          title
          slug
          featureImage {
            fluid(maxWidth: 1200) {
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
