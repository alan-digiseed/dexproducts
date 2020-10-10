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

    for (i = 0; i < result.data.allPagesJson.nodes.length; i++) {
      let page = result.data.allPagesJson.nodes[i];
      await createPage({
         path: page.slug != "home" ? page.slug : "/",
         component: path.resolve(`./src/templates/${page.layout}.js`),
         context: {
           // Data passed to context is available
           // in page queries as GraphQL variables.
           slug: page.slug,
         },      
      })
    };
    
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
          subcategories {
            name
            slug
          }
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
    console.log(`creating category page - ${category.name}`)
    await createPage({
        path: `/categories/${category.slug}`,
        component: path.resolve(`src/templates/category.js`),
        context: {
          slug: category.slug,
          name: category.name
        }
      });

    if (category.subcategories) {
      for (j=0; j < category.subcategories.length; j++) {
        let subcategory = category.subcategories[j];    
        await createPage({
            path: `/category/${category.slug}/${subcategory.slug}`,
            component: path.resolve(`src/templates/category.js`),
            context: {            
              slug: category.slug,
              name: category.name,
              subcategorySlug: subcategory.slug,
              subcategoryName: subcategory.name
            }
          });
          if (subcategory.subcategories != null) {
            for (k=0; k < subcategory.subcategories.length; k++) {
              let subsub = subcategory.subcategories[k];    
              await createPage({
                  path: `/category/${category.slug}/${subcategory.slug}/${subsub.slug}`,
                  component: path.resolve(`src/templates/category.js`),
                  context: {            
                    slug: category.slug,
                    name: category.name,
                    subcategorySlug: subcategory.slug,
                    subcategoryName: subcategory.name,
                    subsubSlug: subsub.slug,
                    subsubName: subsub.name
                  }
                });
                         
            }  
          }
      
      }  
    }
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
        services: [ProductJsonPriceListServices]
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
      }
      
      type ProductsJsonPrintOptions implements Node {
        printType: String
        description: String
      }

      type categoriesJson implements Node {
        name: String
        slug: String
        title: String
        alias: String
        imageUrl: String
        subcategories: [CategoriesJsonSubcategories]
      }

      type CategoriesJsonSubcategories implements Node {
        category: String
        name: String
        slug: String
        subcategories: [CategoriesJsonSubcategories]
      }
      `


      createTypes(typeDefs)
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    // Update the page.
    createPage(page)
  }
}