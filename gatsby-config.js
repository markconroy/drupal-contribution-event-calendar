const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Drupal Contribution Event Calendar`,
    description: `Lists of Drupal contribution events by Mark Conroy.`,
    author: `@markconroy`,
    siteUrl: `https://dcec.mark.ie`,
    metaImage: `drupal-logo-with-text.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/events`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Drupal Contribution Event Calendar`,
        short_name: `dcec`,
        start_url: `/`,
        background_color: `#0077C0`,
        theme_color: `#0077C0`,
        display: `minimal-ui`,
        icon: `src/images/drupal-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
