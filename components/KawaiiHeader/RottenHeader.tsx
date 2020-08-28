import React from "react";
import { Confirm, Header, Transition } from "semantic-ui-react";
import { PosMeMuero } from "components/SVGIcons";

const RottenHeader = () => (
  <Header size="huge" as="h1">
    Paltas
    <PosMeMuero size="58px" />
  </Header>
);

export default RottenHeader;
