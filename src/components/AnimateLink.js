import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AnimateLink = ({ path }) => (
  <AniLink
    className="menu-item"
    cover
    bg="black"
    duration={1}
    to={path}
  ></AniLink>
)

export default AnimateLink
