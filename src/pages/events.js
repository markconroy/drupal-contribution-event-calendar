import React from 'react'
import { graphql, Link } from 'gatsby'
// import styled from 'styled-components'

import SEO from '../components/seo'
import GlobalStyles from '../styles/GlobalStyles'
import Layout from '../components/layout'
import {
  CardListContainer,
  CardListItem,
} from '../components/list-types/card-list'
import Card from '../components/display-types/card'

export default function EventsListingPage({ data }) {
  const events = data.events.edges
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SEO title="Developer events Images and Descriptions" />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <h1>events</h1>
          <CardListContainer>
            {events.map(event => (
              <>
                <CardListItem cardListItemKey={`list-item-${event.node.id}`}>
                  <Card
                    cardTitle={
                      event.node.frontmatter ? event.node.frontmatter.title : ''
                    }
                    cardPath={`/events/${event.node.id}`}
                  />
                </CardListItem>
              </>
            ))}
          </CardListContainer>
        </div>
      </Layout>
    </>
  )
}

export const eventsQuery = graphql`
  query eventsListingQuery {
    events: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
