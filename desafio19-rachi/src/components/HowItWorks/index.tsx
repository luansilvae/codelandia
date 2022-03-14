import React from "react";
import { HappyFace } from "../Icons/HappyFace";
import { Security } from "../Icons/Security";
import { UserConnection } from "../Icons/UserConnection";

import { Container, GridContainer, GridItem } from "./styles";

export const HowItWorks: React.FC = () => {
  return (
    <Container id="how-it-works">
      <h2 data-aos="fade-up">Como funciona</h2>
      <GridContainer data-aos="fade-up" data-aos-delay="200">
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