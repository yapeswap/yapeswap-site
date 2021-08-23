module.exports = {
  siteMetadata: {
    title: `Yapeswap`,
    description: `Yapeswap is a next-generation, more capital efficient AMM, further generating yield from idle LPs.`,
    author: `@yapeswap`,
    siteUrl: `https://yape.exchange/`,
    keywords: `defi, dex, tokens, token, crypto, yield farming, yield, yield ape, yearned, dao, lp, liquidity provider, rewards, ape, apeing in, yape, yapes, swap, yapeswap, exchange`,
    image: 'https://i.imgur.com/Ascs8a4.png?1'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Mono`,
          `Open Sans`, // you can also specify font weights and styles
          'Lobster Two',
        ],
        display: 'swap'
      }
    },


    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
