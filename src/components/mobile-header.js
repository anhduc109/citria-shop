import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { stack as Menu } from "react-burger-menu"

export default class MobileHeader extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu>
        <AniLink className="menu-item" cover bg="black" duration={1} to="/">
          Home
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={1}
          to="/store"
        >
          Store
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={1}
          to="/about"
        >
          About
        </AniLink>
        <AniLink
          className="menu-item"
          cover
          bg="black"
          duration={1}
          to="/contact"
        >
          Contact
        </AniLink>
      </Menu>
    )
  }
}
