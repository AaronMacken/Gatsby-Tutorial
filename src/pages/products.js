import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

export default function products() {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Products Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui totam
          asperiores facere nihil nesciunt dignissimos, iste quidem porro
          doloremque. Placeat autem similique nesciunt sit provident?
        </p>
      </div>
    </Layout>
  )
}
