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
          {data.data.allContentfulProduct.edges
            .slice(0, NoOfPost)
            .map(items => (
              <div
                className="Catalogue__item col-sm-12 col-md-4 col-lg-3"
                key={items.node.id}
              >
                <div className="details_List">
                  {items.node.image === null ? (
                    <div className="no-image">No Image</div>
                  ) : (
                    <Img fluid={items.node.image.fluid} />
                  )}

                  <div className="details_inner">
                    <AnimateLink
                      path={`/store/${items.node.slug}`}
                      content={<h5>{items.node.name}</h5>}
                    />
                    <div className="row">
                      <div className="col-sm-12 align-self-center">
                        <h6>{items.node.price} VNĐ</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Store" keywords={[`gatsby`, `store`, `react`]} />
    <div className="container">
      <div className="store-page">
        <IndexPost data={data}></IndexPost>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query StoreQuery {
    allContentfulProduct {
      edges {
        node {
          id
          name
          slug
          rating
          image {
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
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
  }
`
