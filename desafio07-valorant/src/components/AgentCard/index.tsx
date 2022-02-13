import React from "react";
import { IAgent } from "../../types/IAgent";

import { Container } from "./styles";

const AgentCard: React.FC<IAgent> = ({
  displayName,
  bustPortrait,
}) => {
  return (
    <Container>
      <img src={bustPortrait} alt={displayName} />
      <h1>{displayName}</h1>
    </Container>
  );
};

export default AgentCard;
