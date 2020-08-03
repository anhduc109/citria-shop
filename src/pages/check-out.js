import React from "react"
import { useSelector } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CheckOutPage = () => {
  const cart = useSelector(state => state.product.cart)

  return cart.length > 0 ? (
    <Layout>
      <SEO title="Check Out" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="check-out-page">
        <div className="container">
          <div className="row">
            <div className="check-out-information col-md-7 col-sm-12 col-12">
              <form>
                <h5>MY INFORMATION</h5>
                <div className="check-out-section-wrapper">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="firstNameInput check-out-label">
                          Email<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="emailInput"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="firstNameInput check-out-label">
                          Phone number<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="phoneNumberInput"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="firstNameInput check-out-label">
                          First name<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="firstNameInput"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                      <div class="form-group">
                        <label for="firstNameInput check-out-label">
                          Last name<span className="input-required">*</span>
                        </label>
                        <input
                          type="text"
                          class="form-control check-out-input"
                          id="lastNameInput"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h5>SHIPPING ADDRESS</h5>
              </form>
            </div>
            <div className="check-out-summary col-md-5 col-sm-12 col-12">
              <h5>YOUR ORDER</h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Layout>
      <SEO
        title="Check Out fail"
        keywords={[`Citriavn`, `Citria`, `ecommerce`]}
      />
      <div className="check-out-page">
        <div className="container">
          <h3>Sorry! Your shopping cart is empty. You cannot checkout.</h3>
        </div>
      </div>
    </Layout>
  )
}

export default CheckOutPage
