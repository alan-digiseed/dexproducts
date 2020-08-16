const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions}) => {
    if (node.internal.type === `PagesJson` && node.type==='page') {
        const { createNodeField } = actions

        let slug = createFilePath({ node, getNode, basePath: `pages` })
        if (slug == '/home/')
             slug = '/';
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
      allPagesJson {
          nodes {
            slug
            layout
          }
        }
      }
    `);

    result.data.allPagesJson.nodes.forEach(( node ) => {
      createPage({
         path: node.slug != "home" ? node.slug : "/",
         component: path.resolve(`./src/templates/${node.layout}.js`),
         context: {
           // Data passed to context is available
           // in page queries as GraphQL variables.
           slug: node.slug,
         },      
      })
    });
    
    createProductPages({actions, graphql});
}

const  createProductPages = async ({actions, graphql}) => {

  const { createPage } = actions

  const result = await graphql(`
    {
      allProductsJson {
          nodes {
            id
            name
            productCode
          }
        }
      }`);

    if (result.errors) {
      console.error(result.errors)
    }

    result.data.allProductsJson.nodes.forEach(( node ) => {

    createPage({
        path: `/products/${node.productCode}`,
        component: path.resolve(`src/templates/product.js`),
        context: {
          id: node.id
        }
      })
    })
  
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type PagesJson implements Node {
        sections: [PagesectionsJson] @link
    }

    type PagesectionsJsonContentItems implements Node {
      id: String
      title: String
      subtitle: String
      description: String
      callToAction: String
      callToActionUrl: String
    }

    type productsJson implements Node {
      additionalInfo: String
      category1: String
      category2: String
      category3: String
      description: String
      id: String
      images: String
      isFreightFree: Boolean
      isOnSale: Boolean
      isOverseasSourcing: Boolean
      name: String
      packing: ProductsJsonPacking
      parts: [ProductsJsonParts]
      priceLists: ProductsJsonPriceLists
      printOptions: ProductsJsonPrintOptions
      productCode: String
      productDisclaimer: String
    }
      
      type ProductsJsonParts implements Node {
        partName: String
        colours: [String]
        width: String
        height: String
        length: String
      }`

      createTypes(typeDefs)
}