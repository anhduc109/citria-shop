import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckOutForm from "../components/CheckOutForm"
import CheckOutSummarize from "../components/CheckOutSummarize"

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
      <SEO
        title="Check Out"
        keywords={[`Citria Gomet`, `Checkout`, `ECommerce`]}
      />
      <div className="check-out-page">
        <div className="container">
          <div className="row">
            <div className="check-out-information col-md-7 col-sm-12 col-12">
              <CheckOutForm
                totalPrice={totalPrice}
                productsInfo={productsInfo}
              />
            </div>
            <div className="check-out-summary col-md-5 col-sm-12 col-12 order-first order-md-last">
              <CheckOutSummarize totalPrice={totalPrice} />
            </div>
          </div>
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
