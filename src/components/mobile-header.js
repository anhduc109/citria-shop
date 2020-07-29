import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useLocation } from "@reach/router"
import { stack as Menu } from "react-burger-menu"

import menuIcon from "../images/menu-icon.svg"
import AnimateLink from "./AnimateLink"

const MobileHeader = () => {
  const { pathname } = useLocation()

  return (
    <header
      className={pathname === "/" ? "mobile-header-home" : "mobile-header"}
    >
      <Menu customBurgerIcon={<img src={menuIcon} alt="menu-icon" />}>
        <AniLink className="menu-item" cover bg="black" duration={1} to="/">
          <h3>Home</h3>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={1}
          to="/store"
        >
          <h3>Store</h3>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={1}
          to="/about"
        >
          <h3>About</h3>
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={1}
          to="/contact-us"
        >
          <h3>Contact</h3>
        </AniLink>
      </Menu>
      <div className="citria-logo">
        <AnimateLink path="/" name="Citria" color="white"></AnimateLink>
      </div>
    </header>
  )
}

export default MobileHeader
