import React from "react";

import GameVideo from '../../assets/video-full.mp4'

import { Container, Video, Content, Title, ValorantLogo, Button } from "./styles";

const HomeHero: React.FC = () => {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src={GameVideo} type="video/mp4" />
      </Video>

      <Content>
        <Title>
          <span>Um jogo de tiro tático 5x5 com personagens originais</span>
          <ValorantLogo />
        </Title>

        <Button>Jogue Grátis</Button>
      </Content>
    </Container>
  );
};

export default HomeHero;
