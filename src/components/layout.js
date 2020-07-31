import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import MobileHeader from "./mobile-header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isMobileSize, setIsMobileSize] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
  }, [])

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
