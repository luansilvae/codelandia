import React from "react";
import Illustration from "../../assets/img/hero-illustration.svg";

import { Container, BannerWrapper, Content, Button } from "./styles";

export const HeroBanner: React.FC = () => {
  return (
    <Container>
      <BannerWrapper>
        <Content data-aos="fade-up">
          <h1>
            Rachi, <br />é tudo que você precisa em um só lugar.
          </h1>
          <Button>Cadastrar-se</Button>
        </Content>
        <img src={Illustration} alt="Hero Banner Illustration" data-aos="fade-up"/>
      </BannerWrapper>
    </Container>
  );
};
