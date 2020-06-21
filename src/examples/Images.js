import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img1.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img1.jpeg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic React Image</h3>
        <img src={img} width="100%" alt="coffee react" />
      </article>
      <article className="single-image">
        <h3>Fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} alt="Gatsby Fixed" />
      </article>
      <article className="single-image">
        <h3>Fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} alt="Gatsby Fluid" />
      </article>
    </section>
  )
}

export default Images
