import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AnimateLink = ({ path, content, color, disabled }) =>
  !disabled ? (
    <AniLink
      style={{ color }}
      className="animate-link"
      cover
      bg="black"
      duration={0.5}
      to={path}
    >
      {content}
    </AniLink>
  ) : (
    content
  )

export default AnimateLink
