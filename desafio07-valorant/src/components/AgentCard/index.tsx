import React from "react";
import { Link } from "react-router-dom";

import { IAgent } from "../../types/IAgent";

import { Container } from "./styles";

const AgentCard: React.FC<IAgent> = ({ displayName, bustPortrait, uuid }) => {
  return (
    <Link to={`/${uuid}`}>
      <Container>
        <img src={bustPortrait} alt={displayName} />
        <h1>{displayName}</h1>
      </Container>
    </Link>
  );
};

export default AgentCard;
