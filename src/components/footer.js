import React, { Component } from "react"
import { Link } from "gatsby"

import FacebookLogo from "../images/facebook.svg"
import InstagramLogo from "../images/instagram.svg"
import AnimateLink from "./AnimateLink"

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer_inner">
          <div className="container">
            {/* <div className="footer-widget footer-content">
              <section id="nav_menu-8" className="widget widget_nav_menu">
                <div className="menu-main-container">
                  <ul id="menu-main" className="menu">
                    <li>
                      <AnimateLink path="/store" color="#fff" content="Store" />
                    </li>
                    <li>
                      <AnimateLink path="/about" color="#fff" content="About" />
                    </li>
                  </ul>
                </div>
              </section>
            </div> */}
            <div className="footer-bottom social-right-menu ">
              <div className="site-info">
                <div>
                  <a
                    href="https://www.facebook.com/citriavietnam"
                    target="_blank"
                  >
                    <img
                      className="footer-facebook"
                      src={FacebookLogo}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.instagram.com/citriavn/" target="_blank">
                    <img
                      className="footer-instagram"
                      src={InstagramLogo}
                      alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <p>©2020 Citriavn. All rights reserved</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
