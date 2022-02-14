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
    // fetchData();
  }, []);

  return (
    <Container>
      <HeaderAgent
        bgAgent={
          "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/background.png"
        }
      >
        <TopContent>
          <img
            src="https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png"
            alt="Agente"
          />
          <AgentBio>
            <h1>BREACH</h1>
            <h2>// BIOGRAFIA</h2>
            <p>
              Criada no coração do México, Reyna domina o combate individual,
              destacando-se a cada abate efetuado. Sua capacidade só é limitada
              por sua própria perícia, tornando-a bastante dependente de
              desempenho.
            </p>
          </AgentBio>
        </TopContent>
        <BottomContent>
          <span>// FUNÇÃO </span>
          <h1>DUELISTA</h1>
          <p>
            niciadores desafiam situações arriscadas, preparando a equipe para
            entrar em terreno contestado e rechaçar defensores."
          </p>
        </BottomContent>
      </HeaderAgent>
    </Container>
  );
};

export default Agent;
