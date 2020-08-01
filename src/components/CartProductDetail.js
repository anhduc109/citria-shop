import React from "react"
import Img from "gatsby-image"
import { useDispatch } from "react-redux"

import XIcon from "../images/x-icon.svg"
import {
  changeQuantityOfCartProduct,
  removeProductFromCart,
} from "../redux/actions"

const CartProductDetail = ({ item }) => {
  const dispatch = useDispatch()

  const handleChangeQuantity = evt => {
    const newItem = { ...item, quantity: parseInt(evt.target.value) }
    dispatch(changeQuantityOfCartProduct(newItem))
  }

  const handleRemoveProduct = () => {
    dispatch(removeProductFromCart(item))
  }

  return (
    <div key={item.id} className="row cart-item-detail">
      <Img fluid={item.img} className="col-md-3 col-sm-4 col-3" />
      <div className="col-md-7 col-sm-6 col-7">
        <h6>{item.name}</h6>
        <p>Price: {item.price} VNĐ</p>
        <p>Size: {item.size}</p>
        <select
          aria-required="false"
          value={item.quantity}
          className="form-control cart-quantity-select"
          onChange={handleChangeQuantity}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className="col-md-2 col-sm-2 col-2">
        <img
          className="remove-logo"
          src={XIcon}
          alt="remove"
          onClick={handleRemoveProduct}
        />
      </div>
    </div>
  )
}

export default CartProductDetail
