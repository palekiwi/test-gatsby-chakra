import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const Layout: React.FC<{}> = ({ children }) => {
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

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
