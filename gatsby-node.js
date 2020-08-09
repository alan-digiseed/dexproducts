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
}

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
    }`


    createTypes(typeDefs)
}