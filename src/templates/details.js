import React, { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery"
import { graphql } from "gatsby"
import { useDispatch } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { addProductToCart } from "../redux/actions"
import AnimateLink from "../components/AnimateLink"

const ProductDetails = data => {
  const [imagesGallery, setImagesGallery] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const images = []
    images.push({
      original: data.data.contentfulProduct.image.fluid.src,
      thumbnail: data.data.contentfulProduct.image.fluid.src,
    })
    data.data.contentfulProduct.productMorePhotos.map(item => {
      const imageObject = {
        original: item.fluid.src,
        thumbnail: item.fluid.src,
      }
      return images.push(imageObject)
    })
    setImagesGallery(images)
  }, [
    data.data.contentfulProduct.image.fluid.src,
    data.data.contentfulProduct.productMorePhotos,
  ])

  const handleAddToCart = () => {
    const product = {
      name: data.data.contentfulProduct.name,
      id: data.data.contentfulProduct.id,
      img: data.data.contentfulProduct.image.fluid,
      quantity: 1,
      price: data.data.contentfulProduct.price,
    }
    dispatch(addProductToCart(product))
  }

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
            <select class="form-control">
              <option>Select size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <br />
            <AnimateLink
              path="/cart"
              content={
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to cart
                </button>
              }
            ></AnimateLink>
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
          html
        }
      }
      productMorePhotos {
        id
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
      rating
    }
  }
`
