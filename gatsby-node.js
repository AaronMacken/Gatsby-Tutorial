// need an absolute path to find our components, path is given to us from node
const path = require("path")

// crate pages dynamically
// unsure of where graphql, actions & actions.cratePage are coming from
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //   run a graphql query to get our slugs, aka our path variables
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  //   console.log("######")
  //   console.log(JSON.stringify(result))
  //   console.log("######")
  // the names in the createPage function are important
  // for each of the products graphql finds, create a page for each
  result.data.products.nodes.forEach(product => {
    createPage({
      // what URL our templates will show up on
      path: `products/${product.slug}`,
      //   make sure you don't type the path incorrectly!
      // where our template file is found
      component: path.resolve(`src/templates/product-template.js`),
      // uses the slug in the template file to set up a query which finds all the data for the given product slug
      // shows up as props.pathContext.<varName> or props.pathContext.slug
      context: {
        slug: product.slug,
      },
    })
  })
}
