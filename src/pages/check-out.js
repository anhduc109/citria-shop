import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CheckOutPage = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const cart = useSelector(state => state.product.cart)

  useEffect(() => {
    let newTotalPrice = 0
    cart.map(item =>
      setTotalPrice((newTotalPrice += item.price * item.quantity))
    )
  }, [cart])

  // return cart.length > 0 ? (
  return (
    <Layout>
      <SEO title="Check Out" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="check-out-page">
        <div className="container">
          <div className="row">
            <div className="check-out-information col-md-7 col-sm-12 col-12">
              <form
                name="check-out-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                netlify-honeypot="bot-field"
                method="POST"
              >
                <input type="hidden" name="form-name" value="check-out-form" />
                <h5>MY INFORMATION</h5>
                <div className="check-out-section-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="emailInput">
                          Email<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="emailInput"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="phoneNumberInput">
                          Phone number<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="phoneNumberInput"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="firstNameInput">
                          First name<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="firstNameInput"
                          name="first-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="lastNameInput">
                          Last name<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="lastNameInput"
                          name="last-name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h5>SHIPPING ADDRESS</h5>
                <div className="check-out-section-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="addressInput">
                          Address<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="addressInput"
                          name="address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="districtInput">
                          District<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="districtInput"
                          name="district"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label htmlFor="cityInput">
                          City<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="cityInput"
                          name="city"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {cart.map((item, index) => (
                  <input
                    key={item.id}
                    type="text"
                    class="form-control check-out-input"
                    id={`Ordered product ${index + 1}`}
                    name={`Ordered-product-${index + 1}`}
                    value={`Product: ${item.name}, Size: ${item.size}, Quantity: ${item.quantity}, Price: ${item.price} VNĐ`}
                    hidden
                  />
                ))}
                <input
                  type="text"
                  class="form-control check-out-input"
                  id="totalPrice"
                  name="total-price"
                  value={`${totalPrice} VNĐ`}
                  hidden
                />
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-6"></div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <button type="submit" className="add-to-cart-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="check-out-summary col-md-5 col-sm-12 col-12">
              <h5>YOUR ORDER</h5>
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
