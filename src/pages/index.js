import React from "react"
import Ape from "../components/Ape"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="YAPE" />  
    <Hero />
    <Ape />
  </Layout>
)

export default IndexPage
