import axios from "axios";
import React, { useEffect, useState } from "react";
import AgentCard from "../../components/AgentCard";
import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";
import { IAgent } from "../../types/IAgent";

import { Container, Agents, Title, AgentsList } from "./styles";

const Home: React.FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);

  async function fetchData() {
    const response = await axios.get(
      `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`
    );
    const { data } = await response.data;

    setAgents(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <HomeHero />
      <Agents id="agents">
        <Title>
          <h2>SEUS AGENTES</h2>
          <div className="description">
            <span>A CRIATIVIDADE É SUA MELHOR ARMA.</span>
            <p>
              Mais do que armas e munição, VALORANT inclui agentes com
              habilidades adaptativas, rápidas e letais, que criam oportunidades
              para você exibir sua mecânica de tiro. Cada Agente é único, assim
              como os momentos de destaque de cada partida!
            </p>
          </div>
        </Title>

        <AgentsList>
          {agents.map((agent) => (
            <AgentCard
              key={agent.uuid}
              uuid={agent.uuid}
              displayName={agent.displayName}
              bustPortrait={agent.bustPortrait}
            />
          ))}
        </AgentsList>
      </Agents>
    </Container>
  );
};

export default Home;
