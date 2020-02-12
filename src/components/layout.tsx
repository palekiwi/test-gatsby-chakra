import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
//import { customTheme } from "../theme";

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
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div>{data.site.siteMetadata.title}</div>
      <div>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
