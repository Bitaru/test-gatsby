import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data }) => {
  const posts = data?.allCosmicjsPosts?.edges;
  return (
    <Layout>
      <Seo title="Home" />
      <h3>Posts from Cosmic:</h3>
      {
        posts.map(({ node }) =>
          <div key={node.slug}>
            <h4>{node.title}</h4>
            <p>{node.metadata?.description}</p>
            <hr />
          </div>
        )
      }
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`

export default Index;
