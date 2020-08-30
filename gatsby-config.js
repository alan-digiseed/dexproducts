require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

console.log('ALGOLIA_APP_ID=' + process.env.ALGOLIA_APP_ID);
console.log('ALGOLIA_API_KEY=' + process.env.ALGOLIA_API_KEY);
console.log('ALGOLIA_INDEX_NAME=' + process.env.ALGOLIA_INDEX_NAME);  

const productQuery = `{
  allProductsJson {
    nodes {
      objectID: productCode
      productCode
      name
      description
      additionalInfo
      category1
      category2
      category3
      images  
    }
  }
}`;


const queries = [
  {
    query: productQuery,
    transformer: ({ data }) => data.allProductsJson.nodes, // optional
    indexName: 'Dex-Products', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
    matchFields: ['name', 'productCode', 'description'], // Array<String> overrides main match fields, optional
  },
];



module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['name', 'productCode', 'description'], // Array<String> default: ['modified']
      },
    },    
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {       
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Material Icons`,
          `Cairo`,
          'PT Sans'
        ],
        display: 'swap'
      }
     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
