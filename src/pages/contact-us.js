import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Us" keywords={[`gatsby`, `Contact Us`, `react`]} />
        <div className="Contact-us">
          <div className="container">
            <form name="contact" data-netlify="true" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Your name
                <input type="text" name="name" required />
              </label>
              <label>
                Your Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea name="message" required></textarea>
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
