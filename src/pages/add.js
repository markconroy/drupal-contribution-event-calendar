import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'

const AddPageStyles = styled.article`
  ul {
    margin-bottom: 3rem;
  }
`

export default function AddPage() {
  //
  return (
    <>
      <Layout>
        <SEO title="Add your Drupal Contribution Event" />
        <AddPageStyles className="layout-contained padding-horizontal">
          <h1>Add Your Event</h1>
          <p>
            To add your Drupal contribution event to this website, simply{' '}
            <a href="https://github.com/markconroy/drupal-contribution-event-calendar">
              open a PR on GitHub
            </a>{' '}
            against the <code>main</code> branch. Some notes:
          </p>
          <ul>
            <li>
              Create your event markdown file in <code>/src/events</code>
            </li>
            <li>
              Follow this naming convention for your file{' '}
              <code>YYYY-MM-DD-event-name</code> (where YYYY-MM-DD is the date
              of the start of the event)
            </li>
          </ul>
          <p>
            Everything is saved in markdown frontmatter. Here are the options
            available:
          </p>
          <ul>
            <li>
              <code>title</code> (event name, e.g.{' '}
              <code>Dublin Drupal Contribution Day</code>)
            </li>
            <li>
              <code>startDate</code> (e.g. <code>2022-07-01</code>)
            </li>
            <li>
              <code>endDate</code> (e.g. <code>2022-07-01</code>)
            </li>
            <li>
              <code>website</code> (address of your website, e.g.{' '}
              <code>https://mark.ie/blog</code>)
            </li>
            <li>
              <code>twitter</code> (your Twitter username, e.g.{' '}
              <code>markconroy</code>)
            </li>
            <li>
              <code>instagram</code>( your Instagram username, e.g.{' '}
              <code>markyconroy</code>)
            </li>
          </ul>
        </AddPageStyles>
      </Layout>
    </>
  )
}
