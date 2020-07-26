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
                    <Img sizes={items.node.image.fixed} />
                  )}

                  <div className="details_inner">
                    <h2>
                      <AnimateLink
                        path={`/${items.node.slug}`}
                        name={items.node.name}
                      />
                    </h2>
                    <div className="row">
                      <div className="col-sm-12 align-self-center">
                        <span className="price">${items.node.price}</span>
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
    <div className="container store-page">
      <IndexPost data={data}></IndexPost>
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
            fixed(width: 500, height: 1000) {
              width
              height
              src
              srcSet
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
