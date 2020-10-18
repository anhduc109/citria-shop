import React, { useState } from "react"
import Img from "gatsby-image"
import { useSelector } from "react-redux"

import PlusIcon from "../images/plus-icon.svg"
import MinusIcon from "../images/minus-icon.svg"

const CheckOutSummarize = ({ totalPrice }) => {
  const cart = useSelector(state => state.product.cart)
  const [isOpened, setIsOpened] = useState(cart.length <= 2)

  return (
    <>
      <h5>YOUR ORDER</h5>
      <div className="check-out-section-wrapper">
        <div className="order-total-price-wrapper">
          <h6 className="order-total-price">TOTAL PRICE</h6>
          <h6 className="order-total-price">
            {totalPrice.toLocaleString()} VNĐ
          </h6>
        </div>
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
                <div className="order-details-price">
                  {item.price.toLocaleString()} VNĐ
                </div>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </>
  )
}

export default CheckOutSummarize
