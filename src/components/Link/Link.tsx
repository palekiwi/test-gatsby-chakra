import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  to: string;
}

const Link: React.FC<Props> = ({ children, to }) => <GatsbyLink to={to}>{children}</GatsbyLink>;

export default Link;
