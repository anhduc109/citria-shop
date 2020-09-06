import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"

import "../css/style.css"
import CitriaGomet from "../images/citria-gomet.png"
import ShoppingCartLogo from "../images/shopping-cart-2.svg"

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
              duration={0.5}
              to="/"
            >
              <img
                className="citria-logo"
                src={CitriaGomet}
                alt="Citria logo"
              />
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
                    duration={0.5}
                    to="/"
                  >
                    Home
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={0.5}
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
                    duration={0.5}
                    to="/collections"
                  >
                    Collections
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={0.5}
                    to="/policy"
                  >
                    Policy
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={0.5}
                    to="/about"
                  >
                    About
                  </AniLink>
                </li>
                <li className="nav-item">
                  <AniLink cover bg="black" duration={0.5} to="/cart">
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
