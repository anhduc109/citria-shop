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
      images.push(imageObject)
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
        <div className="product-details">
          <ImageGallery
            items={imagesGallery}
            thumbnailPosition="left"
            showPlayButton={false}
          />
          <br />
          <div>
            <h3>{data.data.contentfulProduct.name}</h3>
          </div>
          <div className="row buynowinner">
            <span className="price">${data.data.contentfulProduct.price}</span>
            <a
              href="#"
              className="Product snipcart-add-item"
              data-item-id={data.data.contentfulProduct.slug}
              data-item-price={data.data.contentfulProduct.price}
              data-item-image={
                data.data.contentfulProduct.image === null
                  ? ""
                  : data.data.contentfulProduct.image.fixed.src
              }
              data-item-name={data.data.contentfulProduct.name}
              data-item-url={`/`}
            >
              <i className="fas fa-tags" />
              Buy Now
            </a>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.data.contentfulProduct.details.childMarkdownRemark.html,
            }}
          />
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
