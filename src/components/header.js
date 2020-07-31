import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"

import "../css/style.css"
import CitriaLogo from "../images/citria-logo.png"
import ShoppingCartLogo from "../images/shopping-cart.svg"

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className={pathname === "/" ? "site-header-home" : "site-header"}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 align-self-center">
            <AniLink
              className="header-logo"
              cover
              bg="black"
              duration={1}
              to="/"
            >
              <img className="citria-logo" src={CitriaLogo} alt="Citria logo" />
            </AniLink>
          </div>
          <div className="col-sm-12 col-md-8">
            <nav>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={1}
                    to="/"
                  >
                    Home
                  </AniLink>
                </li>
                {/* <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={1}
                    to="/blogs"
                  >
                    Blogs
                  </AniLink>
                </li> */}
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={1}
                    to="/store"
                  >
                    Store
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={1}
                    to="/about"
                  >
                    About
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={1}
                    to="/contact-us"
                  >
                    Contact
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink cover bg="black" duration={1} to="/cart">
                    <img
                      className="shopping-cart-logo"
                      src={ShoppingCartLogo}
                      alt="Shopping cart"
                    />
                  </AniLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
