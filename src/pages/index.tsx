import * as React from "react";
import { Link } from "gatsby";
import { Button } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Index Page" />
    <h1>title</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Button variantColor="teal">Click</Button>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
