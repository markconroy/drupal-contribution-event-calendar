import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const ArticleStyles = styled.article`
  a {
    color: var(--color-secondary);
  }
  * + h2 {
    margin-top: 4rem;
  }
`

export default function SinglePage({ data }) {
  const { event } = data
  const { title, website, twitter, instagram } = event.frontmatter
  return (
    <>
      <Layout>
        <SEO
          title={`${title}`}
          description={`${event.frontmatter.title} is on in ${event.frontmatter.country}, starting ${event.frontmatter.startDate}`}
        />
        <div className="layout-contained layout-contained--large padding-horizontal">
          <ArticleStyles>
            <h1>{event.frontmatter.title}</h1>

            <ul>
              <li>Starts: {event.frontmatter.startDate}</li>
              <li>Ends: {event.frontmatter.endDate}</li>
              <li>Country: {event.frontmatter.country}</li>
            </ul>

            <div dangerouslySetInnerHTML={{ __html: event.html }} />

            {website || twitter || instagram ? (
              <>
                <ul>
                  {website && (
                    <li>
                      <a href={website}>Website</a>
                    </li>
                  )}
                  {twitter && (
                    <li>
                      <a href={`https://twitter.com/${twitter}`}>Twitter</a>
                    </li>
                  )}
                  {instagram && (
                    <li>
                      <a href={`https://instagram.com/${instagram}`}>
                        Instagram
                      </a>
                    </li>
                  )}
                </ul>
              </>
            ) : null}
          </ArticleStyles>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    event: markdownRemark(id: { eq: $slug }) {
      id
      html
      frontmatter {
        title
        website
        twitter
        instagram
        startDate
        endDate
        country
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
