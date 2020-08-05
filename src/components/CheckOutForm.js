import React from "react"
import { Formik, useFormik } from "formik"
import { useSelector } from "react-redux"
import qs from "qs"

const CheckOutForm = ({ totalPrice, productsInfo }) => {
  const cart = useSelector(state => state.product.cart)

  let productsSubmitDetail = []
  cart.map(item => {
    const productInfo = {
      name: item.name,
      size: item.size,
      price: item.price,
      quantity: item.quantity,
    }
    productsSubmitDetail.push(productInfo)
  })

  const validate = values => {
    const errors = {}
    if (!values.firstName || values.firstName.trim() === "") {
      errors.firstName = "Please enter a first name"
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less"
    }

    if (!values.lastName || values.lastName.trim() === "") {
      errors.lastName = "Please enter a last name"
    } else if (values.lastName.length > 15) {
      errors.lastName = "Must be 15 characters or less"
    }

    if (!values.address || values.address.trim() === "") {
      errors.address = "Please enter an address"
    }

    if (!values.phoneNumber || values.phoneNumber.trim() === "") {
      errors.phoneNumber = "Please enter a phone number"
    } else if (values.phoneNumber.length > 15) {
      errors.phoneNumber = "Must be 20 characters or less"
    }

    if (!values.district || values.district.trim() === "") {
      errors.district = "Please enter a district"
    } else if (values.district.length > 15) {
      errors.district = "Must be 15 characters or less"
    }

    if (!values.city || values.city.trim() === "") {
      errors.city = "Please enter a city"
    } else if (values.city.length > 15) {
      errors.city = "Must be 15 characters or less"
    }

    if (!values.email || values.email.trim() === "") {
      errors.email = "Please enter a valid email"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      "form-name": "check-out-form-testing-only",
      email: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      address: "",
      district: "",
      city: "",
      yoyoyo: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
    onSubmit: values => {
      const submitData = {
        ...values,
        totalPrice: `${totalPrice} VNĐ`,
        product1: "chao ae nhe",
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(submitData),
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))
    },
  })

  return (
    <div className="row">
      <div className="check-out-information col-md-7 col-sm-12 col-12">
        <form
          name="check-out-form-testing-only"
          data-netlify="true"
          onSubmit={e => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
          {/* <input type="hidden" name="form-name" value="check-out-form" /> */}
          <h5>MY INFORMATION</h5>
          <div className="check-out-section-wrapper">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="email">
                    Email<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .email && "is-invalid"}`}
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="phoneNumber">
                    Phone number<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .phoneNumber && "is-invalid"}`}
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber ? (
                    <div className="invalid-feedback">
                      {formik.errors.phoneNumber}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="firstName">
                    First name<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .firstName && "is-invalid"}`}
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.errors.firstName ? (
                    <div className="invalid-feedback">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="lastName">
                    Last name<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .lastName && "is-invalid"}`}
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.errors.lastName ? (
                    <div className="invalid-feedback">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <h5>SHIPPING ADDRESS</h5>
          <div className="check-out-section-wrapper">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="address">
                    Address<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .address && "is-invalid"}`}
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                  {formik.errors.address ? (
                    <div className="invalid-feedback">
                      {formik.errors.address}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="district">
                    District<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .district && "is-invalid"}`}
                    id="district"
                    name="district"
                    onChange={formik.handleChange}
                    value={formik.values.district}
                  />
                  {formik.errors.district ? (
                    <div className="invalid-feedback">
                      {formik.errors.district}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-12">
                <div class="form-group">
                  <label htmlFor="city">
                    City<span className="input-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control check-out-input ${formik.errors
                      .city && "is-invalid"}`}
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                  {formik.errors.city ? (
                    <div className="invalid-feedback">{formik.errors.city}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <input
              type="text"
              hidden
              id="productsInfo"
              name="productsInfo"
              value={productsInfo}
            />
            <input
              type="text"
              hidden
              id="totalPrice"
              name="totalPrice"
              value={`${totalPrice} VNĐ`}
            />
          </div>
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
  )
}

export default CheckOutForm
