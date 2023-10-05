import React from "react"
import Layout from "components/Layout"
import { graphql } from "gatsby";
import { Helmet } from "react-helmet"

export default function IndexPage({data}: any) {
  const {title, description} = data.meta.siteMetadata
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <p>Index Page: {description}</p>
    </Layout>
  )
}

export const meta = graphql`
    query siteMetadata {
        meta: site {
            siteMetadata {
            title
            description
            }
        }
    },
`