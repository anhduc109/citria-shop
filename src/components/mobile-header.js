import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useLocation } from "@reach/router"
import { stack as Menu } from "react-burger-menu"

import menuIcon from "../images/menu-icon.svg"
import CitriaLogo from "../images/citria-logo.png"
import ShoppingCartLogo from "../images/shopping-cart-2.svg"

const MobileHeader = () => {
  const { pathname } = useLocation()

  return (
    <div className={pathname === "/" ? "mobile-header-home" : "mobile-header"}>
      <Menu customBurgerIcon={<img src={menuIcon} alt="menu-icon" />}>
        <AniLink
          className="menu-item"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
          to="/"
        >
          <h4>Home</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
          to="/store"
        >
          <h4>Store</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
          to="/collections"
        >
          <h4>Collections</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
          to="/about"
        >
          <h4>About</h4>
        </AniLink>
        <AniLink
          className="menu-item"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
          to="/contact-us"
        >
          <h4>Contact</h4>
        </AniLink>
      </Menu>
      <div className="citria-logo-mobile-wrapper">
        <AniLink
          className="animate-link"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
          to="/"
        >
          <img
            className="citria-logo-mobile"
            src={CitriaLogo}
            alt="Citria logo"
          />
        </AniLink>
      </div>
      <div className="shopping-cart-wrapper">
        <AniLink
          className="animate-link"
          swipe
          direction="left"
          bg="black"
          duration={0.3}
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
