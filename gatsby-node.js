/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  const eventTemplate = require.resolve('./src/templates/EventTemplate.js')
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.id
    actions.createPage({
      path: `/events/${edge.node.id}`,
      component: eventTemplate,
      context: {
        slug: `${edge.node.id}`,
      },
    })
  })
}
