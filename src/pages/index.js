import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const menus = ["blog", "about", "projects"]

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Bio />
      {menus.map(menu => {
        const url = `/${menu}`
        return (
          <div>
            <Link to={url} itemProp="url">
              <span itemProp="headline">{menu}</span>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
