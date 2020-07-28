import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"

import "../css/style.css"

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className={pathname === "/" ? "site-header-home" : "site-header"}>
      {/* <SEO></SEO> */}
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
              {/* <img src={logo} alt="logo"></img> */}
              <h1>Citria</h1>
            </AniLink>
          </div>
          <div className="col-sm-12 col-md-8 align-self-center">
            <nav>
              <ul className="navbar-nav mr-auto">
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
                <li className="nav-item">
                  <AniLink
                    className="nav-link"
                    cover
                    bg="black"
                    duration={1}
                    to="/blogs"
                  >
                    Blogs
                  </AniLink>
                </li>
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
              </ul>
              <div className="header-cart">
                <Link
                  className="Header__summary snipcart-summary snipcart-checkout"
                  to="#"
                >
                  <i className="fas fa-cart-plus"></i>
                </Link>
                {/* <button class="snipcart-add-item"
                data-item-id="starry-night"
                data-item-price="79.99"
                data-item-url="/paintings/starry-night"
                data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                data-item-image="/assets/images/starry-night.jpg"
                data-item-name="The Starry Night">
                Add to cart
              </button> */}
              </div>
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
