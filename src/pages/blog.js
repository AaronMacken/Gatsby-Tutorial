import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

export default function blog() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Blog Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptates veritatis error consequuntur odit placeat accusantium quam,
          consequatur qui quia facere id porro ad dignissimos.
        </p>
      </div>
    </Layout>
  )
}
