import React, { Component } from "react"
import Img from "gatsby-image"

export default class Banner extends Component {
  render() {
    const { BannerData } = this.props

    return (
      <div className="slider-section">
        <div className="site-Banner">
          {BannerData.length > 0 && (
            <Img sizes={BannerData[0].node.image.fluid} />
          )}
        </div>
      </div>
    )
  }
}
