import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { stack as Menu } from "react-burger-menu"

const MobileHeader = () => {
  return (
    <div>
      <Menu>
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
          to="/contact"
        >
          <h3>Contact</h3>
        </AniLink>
      </Menu>
    </div>
  )
}

export default MobileHeader
