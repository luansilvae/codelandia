import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAgentData } from "../../types/IAgentData";

import {
  Container,
  HeaderAgent,
  TopContent,
  AgentBio,
  BottomContent,
} from "./styles";

const Agent: React.FC = () => {
  const { agentId } = useParams();

  const [agentData, setAgentData] = useState<IAgentData>();

  async function fetchData() {
    const response = await axios.get(
      `https://valorant-api.com/v1/agents/${agentId}?language=pt-BR`
    );
    const { data } = await response.data;

    setAgentData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <HeaderAgent>
        <TopContent>
          <img src={agentData?.fullPortrait} alt={agentData?.displayName} />
          <AgentBio>
            <h1>{agentData?.displayName}</h1>
            <h2>// BIOGRAFIA</h2>
            <p>{agentData?.description}</p>
          </AgentBio>
        </TopContent>
        <BottomContent>
          <span>// FUNÇÃO </span>
          <h1>{agentData?.role.displayName}</h1>
          <p>{agentData?.role.description}</p>
        </BottomContent>
      </HeaderAgent>
    </Container>
  );
};

export default Agent;
