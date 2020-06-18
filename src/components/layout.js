import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

// destructuring props.children
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {/* calling props.children here will cause everything place in between the opening and closing tag
                to be rendered here
            */}
        {children}
      </main>
      <Footer />
    </>
  )
}

export default layout
