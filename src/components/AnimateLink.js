import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AnimateLink = ({ path, name }) => (
  <AniLink className="menu-item" cover bg="black" duration={1} to={path}>
    {name}
  </AniLink>
)

export default AnimateLink
