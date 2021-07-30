
import React from "react"
import Header from "./Header"
import { GlobalStyle } from "./GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle />
      <Header />
        <main>{children}</main>
  
    </>
  )
}

export default Layout
