import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// graphql query that will allow us to search for some data
const getData = graphql`
  {
    site {
      siteMetadata {
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
      siteMetadata: {
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
      {data.map(item => (
        <p>{item}</p>
      ))}
      <h3>Person: {name}</h3>
      <h3>
        {name}'s Age: {age}
      </h3>
    </div>
  )
}

export default Header
