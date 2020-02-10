import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  children?: React.ReactNode;
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
  `);

  return (
    <>
      <div>{data.site.siteMetadata.title}</div>
      <div>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
