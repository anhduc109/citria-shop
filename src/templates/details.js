import React, { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProductDetails = data => {
  const [imagesGallery, setImagesGallery] = useState([])

  useEffect(() => {
    const images = []
    images.push({
      original: data.data.contentfulProduct.image.fixed.src,
      thumbnail: data.data.contentfulProduct.image.fixed.src,
    })
    data.data.contentfulProduct.productMorePhotos.map(item => {
      const imageObject = {
        original: item.fixed.src,
        thumbnail: item.fixed.src,
      }
      return images.push(imageObject)
    })
    setImagesGallery(images)
  }, [
    data.data.contentfulProduct.image.fixed.src,
    data.data.contentfulProduct.productMorePhotos,
  ])

  return (
    <Layout>
      <SEO
        title={data.data.contentfulProduct.name}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="container details-page">
        <div className="row product-details">
          <div className="product-gallery col-sm-12 col-md-8">
            <ImageGallery
              items={imagesGallery}
              thumbnailPosition="left"
              showPlayButton={false}
            />
          </div>
          <div className="product-description col-sm-12 col-md-4">
            <h1 className="product-title">
              {data.data.contentfulProduct.name}
            </h1>
            <h1 className="product-price">
              {data.data.contentfulProduct.price} VNĐ
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.data.contentfulProduct.details.childMarkdownRemark.html,
              }}
            />
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails

export const query = graphql`
  query ProductDetailsQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      name
      slug
      image {
        id
        fixed(width: 1200, height: 1200) {
          width
          height
          src
          srcSet
        }
      }
      price
      details {
        childMarkdownRemark {
          html
        }
      }
      productMorePhotos {
        id
        fixed(width: 1200, height: 1200) {
          src
        }
      }
      rating
    }
  }
`
