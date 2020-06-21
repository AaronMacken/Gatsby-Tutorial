import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// graphql query that will allow us to search for some data
// this query does not have a name, but names for your query will come in
// useful when we begin using variables
const getData = graphql`
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

const Header = () => {
  // get data by calling our query above
  // you can destructure multiple times
  const {
    site: {
      info: {
        title,
        description,
        data,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <h3>Mapping through site meta data: </h3>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <h3>Person: {name}</h3>
      <h3>
        {name}'s Age: {age}
      </h3>
    </div>
  )
}

export default Header
