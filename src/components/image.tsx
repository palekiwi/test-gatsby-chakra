import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

interface Data {
  placeholderImage: {
    childImageSharp: {
      fluid: any;
    };
  };
}

const Image: React.FC<{}> = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
