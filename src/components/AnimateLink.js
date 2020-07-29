import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AnimateLink = ({ path, name, color }) => (
  <AniLink
    style={{ color }}
    className="animate-link"
    cover
    bg="black"
    duration={1}
    to={path}
  >
    {name}
  </AniLink>
)

export default AnimateLink
