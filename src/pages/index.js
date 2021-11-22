import * as React from "react"
import Header from '../components/atoms/Header.js'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>David-Abderhalden</title>
      </Helmet>
      <Header></Header>
    </main>
  )
}

export default IndexPage
