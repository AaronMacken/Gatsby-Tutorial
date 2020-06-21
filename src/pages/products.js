import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

export default function products({ data }) {
  // destructurings the nodes (contentful data) & giving it an alias of "products"
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              {/* these images are wrapped in a div, so you'd need to target the div in the css file
              
              -- the image wrapper*/}
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>{product.title}</h3>
              <span>${product.price}</span>
              <Link to={`/products/${product.slug}`}>More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        id
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
