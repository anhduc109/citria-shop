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
  const [size, setSize] = useState("")
  const [isSizeAlertOn, setIsSizeAlertOn] = useState(false)
  const dispatch = useDispatch()

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

  const handleAddToCart = () => {
    if (size !== "") {
      const product = {
        name: data.data.contentfulProduct.name,
        size,
        id: data.data.contentfulProduct.id + size,
        img: data.data.contentfulProduct.image.fixed,
        quantity: 1,
        price: data.data.contentfulProduct.price,
        slug: data.data.contentfulProduct.slug,
      }
      dispatch(addProductToCart(product))
      setIsSizeAlertOn(false)
    } else setIsSizeAlertOn(true)
  }

  const handleChangeSize = evt => {
    setSize(evt.target.value)
  }

  return (
    <Layout>
      <SEO
        title={data.data.contentfulProduct.name}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="container">
        <div className="details-page">
          <div className="row product-details">
            <div className="product-gallery col-sm-12 col-md-8">
              <ImageGallery
                items={imagesGallery}
                thumbnailPosition="left"
                showPlayButton={false}
              />
            </div>
            <div className="product-description col-sm-12 col-md-4">
              <h3 className="product-title">
                {data.data.contentfulProduct.name}
              </h3>
              <h4 className="product-price">
                {data.data.contentfulProduct.price} VNĐ
              </h4>
              <div
                className="product-detail-text"
                dangerouslySetInnerHTML={{
                  __html:
                    data.data.contentfulProduct.details.childMarkdownRemark
                      .html,
                }}
              />
              <select
                class="form-control product-size-select"
                value={size}
                onChange={handleChangeSize}
              >
                <option value={""}>Select size</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
              </select>
              <AnimateLink
                path="/cart"
                content={
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to cart
                  </button>
                }
                disabled={size === ""}
              ></AnimateLink>
              <div hidden={!isSizeAlertOn} className="product-size-alert">
                <p>You need to choose the size first</p>
              </div>
            </div>
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
        fixed(width: 1200, height: 1500) {
          src
          srcSet
          srcWebp
          srcSetWebp
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
        fixed(width: 1200, height: 1500) {
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`
