import * as React from "react";
import { Link } from "gatsby";
import { Button, Box, Text, Heading } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Index Page" />
    <Box m={[2, 4]}>
      <Heading as="h3" color="tomato">
        Heading
      </Heading>
      <Button opacity={0.8} variant="outline" variantColor="teal">
        Click
      </Button>
      <Text>Now go build something great.</Text>
      <Link to="/page-2/">
        <Button variant="solid">Go to page 2</Button>
      </Link>
    </Box>
  </Layout>
);

export default IndexPage;
