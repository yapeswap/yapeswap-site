import React from "react"
import Ape from "../components/Ape"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Social from "../assets/images/social-preview.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="Yape!">  
    <img src={Social} alt='Logo'/>
    </Seo>
    <Hero />
    <Ape />
  </Layout>
)

export default IndexPage
