import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CollectionsPage = () => {
  return (
    <Layout>
      <SEO title="Collections" keywords={[`Citriavn`, `Citria`, `ecommerce`]} />
      <div className="collections-page">
        <div className="container">
          <h3>Collections!</h3>
        </div>
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query BlogsQuery {
//     allContentfulBlogs {
//       edges {
//         node {
//           id
//           title
//           slug
//           publicData(formatString: "MMMM D, YYYY")
//           description {
//             childMarkdownRemark {
//               excerpt(pruneLength: 250)
//             }
//           }
//           featureImage {
//             fluid(maxWidth: 1120) {
//               base64
//               aspectRatio
//               src
//               srcSet
//               srcWebp
//               srcSetWebp
//               sizes
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default CollectionsPage
