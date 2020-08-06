import React, { useState } from "react"
import Img from "gatsby-image"
import { useSelector } from "react-redux"

import PlusIcon from "../images/plus-icon.svg"
import MinusIcon from "../images/minus-icon.svg"
import CartProductDetail from "../components/CartProductDetail"

const CheckOutSummarize = () => {
  const [isOpened, setIsOpened] = useState(false)
  const cart = useSelector(state => state.product.cart)

  return (
    <>
      <h5>YOUR ORDER</h5>
      <div className="check-out-section-wrapper">
        <div
          className="check-out-order-btn"
          onClick={() => setIsOpened(!isOpened)}
        >
          {!isOpened ? (
            <>
              <h6 className="order-view-title">VIEW ORDER DETAILS</h6>
              <img className="order-icon" src={PlusIcon} alt="View order" />
            </>
          ) : (
            <>
              <h6 className="order-view-title">HIDE ORDER DETAILS</h6>
              <img className="order-icon" src={MinusIcon} alt="Hide order" />
            </>
          )}
        </div>
        <div
          className={`check-out-order-details-wrapper ${!isOpened &&
            "display-none"} container`}
        >
          {cart.map(item => (
            <div key={item.id} className="row order-product-wrapper">
              <Img className="col-md-3 col-sm-4 col-4" sizes={item.img} />
              <div className="col-md-9 col-sm-8 col-4">
                <div className="order-details-name">{item.name}</div>
                <div className="order-details-price">{item.price} VNĐ</div>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CheckOutSummarize
