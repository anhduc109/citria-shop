import React, { Component } from "react"

import FacebookLogo from "../images/facebook.svg"
import InstagramLogo from "../images/instagram.svg"

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer_inner">
          <div className="container">
            <div className="footer-bottom social-right-menu ">
              <div className="site-info">
                <div>
                  <a
                    href="https://www.facebook.com/citriagomet"
                    target="_blank"
                  >
                    <img
                      className="footer-facebook"
                      src={FacebookLogo}
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/citriagomet/"
                    target="_blank"
                  >
                    <img
                      className="footer-instagram"
                      src={InstagramLogo}
                      alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
            <p>©{new Date().getFullYear()} Citria Gomet. All rights reserved</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
