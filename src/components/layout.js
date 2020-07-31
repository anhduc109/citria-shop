import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import MobileHeader from "./mobile-header"
import Footer from "./footer"
import { addCartFromLocalStorage } from "../redux/actions"

const Layout = ({ children }) => {
  const [isMobileSize, setIsMobileSize] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.length > 0 && dispatch(addCartFromLocalStorage(cart))
  }, [dispatch])

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="body-wrapper">
          {!isMobileSize ? <Header /> : <MobileHeader />}
          <div className="content-wrapper">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
