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
            <div key={item.id} className="row">
              <img className="col-4" src={item.img.src} />
              <div className="col-8">
                <p>{item.name}</p>
                <p>{item.price} VNĐ</p>
                <p>Size: {item.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CheckOutSummarize
