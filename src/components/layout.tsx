import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

interface Props {
  children?: any
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  )
}

export default Layout
