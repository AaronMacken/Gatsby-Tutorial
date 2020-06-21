import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

import { graphql } from "gatsby"

// destructure props.data
const examples = ({ data }) => {
  // multiple levels of destructuring to get "author"
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <div>
        <p>Hello from examples page</p>
        <Header />
        <hr />
        <HeaderStatic />
        <h4> Author: {author}</h4>
      </div>
    </Layout>
  )
}

// by doing a page query, your component will have access to a "data" prop
// which will have your graphql query results
export const dataLOL = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples
