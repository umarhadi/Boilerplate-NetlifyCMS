import React from "react"
import PropTypes from "prop-types"

import "../styles/index.scss"
import Nav from "../parts/Nav"
import Footer from "../parts/Footer"

const Layout = ({ children }) => (
  <div
    className="dendense-font"
    style={{ minHeight: "100vh", position: "relative" }}
  >
    <Nav brand="Umar Hadi" />
    <div className="container-fluid" style={{ padding: "1rem" }}>
      {children}
    </div>
    <Footer copyright="Umar Hadi" />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
