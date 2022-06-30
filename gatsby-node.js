/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// import path from 'path'

// Grab list of dev workspaces and create pages from them.
// async function turnEventsIntoPages({ graphql, actions }) {
//   // 1. Get a template for this page
//   const eventTemplate = path.resolve('./src/templates/EventTemplate.js')
//   // 2. Query all workspaces
//   const { data } = await graphql(`
//     query {
//       events: allMarkdownRemark {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   `)
//   // 3. Loop over each event and create a page for it.
//   data.events.edges.forEach(event => {
//     actions.createPage({
//       path: `/events/${event.node.id}`,
//       component: eventTemplate,
//       context: {
//         slug: `${event.node.id}`,
//       },
//     })
//   })
// }

// export async function createPages(params) {
//   // Create pages dynamically
//   // Wait for all promises to be resolved before finishing this function.
//   await Promise.all([turnEventsIntoPages(params)])
// }

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