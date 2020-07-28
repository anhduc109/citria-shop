/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import MobileHeader from "./mobile-header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isMobileSize, setIsMobileSize] = useState(
    typeof window !== "undefined" && window.innerWidth
  )

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
        <>
          {!isMobileSize ? <Header /> : <MobileHeader />}
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
