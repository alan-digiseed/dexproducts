const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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
    
    await createProductPages({actions, graphql});
    await createCategoryPages({actions, graphql});
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

  for (i = 0; i < result.data.allProductsJson.nodes.length; i++) {
    product = result.data.allProductsJson.nodes[i];

    await createPage({
        path: `/products/${product.productCode}`,
        component: path.resolve(`src/templates/product.js`),
        context: {
          id: product.id
        }
      });
  } 
};

const  createCategoryPages = async ({actions, graphql}) => {
  const { createPage } = actions

  const result = await graphql(`
  query MyQuery {
    allCategoriesJson {
      nodes {
        title
        alias
        slug
        imageUrl
        name
        subcategories {
          name
          slug
        }
        slug
      }
    }
  }`);

  if (result.errors) {
    console.error(result.errors)
  }

  let categories = result.data.allCategoriesJson.nodes;

  for (i = 0; i < categories.length; i++) {
    let category = categories[i];    
    await createPage({
        path: `/categories/${category.slug}`,
        component: path.resolve(`src/templates/category.js`),
        context: {
          slug: category.slug,
          name: category.name
        }
      });
  }
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
      priceLists: [ProductsJsonPriceList]
      printOptions: ProductsJsonPrintOptions
      productCode: String
      productDisclaimer: String
    }
      
      type ProductsJsonParts implements Node @dontInfer {
        partName: String
        colours: [String]
        width: String
        height: String
        length: String
      }

      type ProductsJsonPacking implements Node {
        cartonHeight: String
        cartonLength: String
        cartonQuantity: String
        cartonWeight: String
        cartonWidth: String
        description: String
      }

      type ProductsJsonPriceList implements Node {
        blanks: [ProductsJsonPriceListBlank]
        services: [ProductJsonPriceListService]
      }

      type ProductsJsonPriceListBlank implements Node {
        type: String
        description: String
        prices: [ProductsJsonPriceListBlanksPrices]
      }

      type ProductsJsonPriceListBlanksPrices implements Node {
        qty: Int!
        unitPrice: Float!
      }
      
      type ProductJsonPriceListServices implements Node {
        priceListType: String
        days: Int
        serviceType: String
        unitPrice: Float
        Setup: Int
        minOrderQty: Int
        maxOrderQty: Int
      }`


      createTypes(typeDefs)
}