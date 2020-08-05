import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckOutForm from "../components/CheckOutForm"

const CheckOutPage = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [productsInfo, setProductsInfo] = useState("")
  const cart = useSelector(state => state.product.cart)

  useEffect(() => {
    let newTotalPrice = 0
    cart.map(item =>
      setTotalPrice((newTotalPrice += item.price * item.quantity))
    )

    let newProductsInfo = ""
    cart.map((item, index) => {
      newProductsInfo += `Product ${index + 1}: ${item.name}, Size: ${
        item.size
      } Quantiy: ${item.quantity}, Price: ${item.price} VNĐ.\n`
    })
    setProductsInfo(newProductsInfo)
  }, [cart])

  // return cart.length > 0 ? (
  return (
    <Layout>
      <SEO title="Check Out" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="check-out-page">
        <div className="container">
          <CheckOutForm totalPrice={totalPrice} productsInfo={productsInfo} />
        </div>
      </div>
    </Layout>
  )
  // ) : (
  //   <Layout>
  //     <SEO
  //       title="Check Out fail"
  //       keywords={[`Citriavn`, `Citria`, `ecommerce`]}
  //     />
  //     <div className="check-out-page">
  //       <div className="container">
  //         <h3>Sorry! Your shopping cart is empty. You cannot checkout.</h3>
  //       </div>
  //     </div>
  //   </Layout>
  // )
}

export default CheckOutPage
