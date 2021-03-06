var dotenv = require("dotenv")
dotenv.config()

const { SPACE_ID, ACCESS_TOKEN, SNIP_CART } = process.env

module.exports = {
  siteMetadata: {
    title: `Citria Gomet`,
    description: `Clothing E-Commerce`,
    author: `Duc Pham`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Citria Gomet`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/citria-gomet-favicon.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: SPACE_ID,
        accessToken: ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: SNIP_CART,
        autopop: true,
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
    },
  ],
}
