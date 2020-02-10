import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Index Page" />
    <h1>title</h1>
    <Image />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
