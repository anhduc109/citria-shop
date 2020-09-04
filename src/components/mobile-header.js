import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useLocation } from "@reach/router"
import { stack as Menu } from "react-burger-menu"

import menuIcon from "../images/menu-icon.svg"
import CitriaGomet from "../images/citria-gomet.png"
import ShoppingCartLogo from "../images/shopping-cart-2.svg"

const MobileHeader = () => {
  const { pathname } = useLocation()

  return (
    <div className={pathname === "/" ? "mobile-header-home" : "mobile-header"}>
      <Menu customBurgerIcon={<img src={menuIcon} alt="menu-icon" />}>
        <AniLink className="menu-item" cover bg="black" duration={0.5} to="/">
          <h4>Home</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={0.5}
          to="/store"
        >
          <h4>Store</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={0.5}
          to="/collections"
        >
          <h4>Collections</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={0.5}
          to="/about"
        >
          <h4>About</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={0.5}
          to="/contact-us"
        >
          <h4>Contact</h4>
        </AniLink>
      </Menu>
      <div className="citria-logo-mobile-wrapper">
        <AniLink
          className="animate-link"
          cover
          bg="black"
          duration={0.5}
          to="/"
        >
          <img
            className="citria-logo-mobile"
            src={CitriaGomet}
            alt="Citria logo"
          />
        </AniLink>
      </div>
      <div className="shopping-cart-wrapper">
        <AniLink
          className="animate-link"
          cover
          bg="black"
          duration={0.5}
          to="/cart"
        >
          <img
            className="shopping-cart-mobile-logo"
            src={ShoppingCartLogo}
            alt="Shopping cart"
          />
        </AniLink>
      </div>
    </div>
  )
}

export default MobileHeader
