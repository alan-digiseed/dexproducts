const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions}) => {
    if (node.internal.type === `MarkdownRemark`) {
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
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                layout
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    result.data.allMarkdownRemark.edges.filter(e => e.node.frontmatter.type === 'page').forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/${node.frontmatter.layout}.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
}