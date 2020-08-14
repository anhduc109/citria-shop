var path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/details.js")
    const CollectionTemplate = path.resolve(
      "src/templates/collectionDetails.js"
    )
    resolve(
      graphql(`
        {
          allContentfulProduct {
            edges {
              node {
                id
                slug
              }
            }
          }
          allContentfulBlogs {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProduct.edges.forEach(edge => {
          createPage({
            path: `store/${edge.node.slug}`,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        result.data.allContentfulBlogs.edges.forEach(data => {
          createPage({
            path: `collections/${data.node.slug}`,
            component: CollectionTemplate,
            context: {
              slug: data.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
