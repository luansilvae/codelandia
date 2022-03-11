import React from "react";
import HappyFace from "../Icons/HappyFace";
import Security from "../Icons/Security";
import UserConnection from "../Icons/UserConnection";

import { Container, GridContainer, GridItem } from "./styles";

const HowItWorks: React.FC = () => {
  return (
    <Container id="how-it-works">
      <h2>Como funciona</h2>
      <GridContainer>
        <GridItem>
          <UserConnection />
          <h3>Crie conexões</h3>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </GridItem>
        <GridItem>
          <Security />
          <h3>100% gratuito</h3>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </GridItem>
        <GridItem>
          <HappyFace />
          <h3>Compartilhamento</h3>
          <p>Lorem ipsum dolor sit amet, consecteteu.</p>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default HowItWorks;
