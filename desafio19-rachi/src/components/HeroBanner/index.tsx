import React from "react";
import Illustration from "../../assets/img/hero-illustration.svg"

import { Container, BannerWrapper, Content, Button } from "./styles";

const HeroBanner: React.FC = () => {
  return (
    <Container>
      <BannerWrapper>
        <Content>
          <h1>
            Rachi, <br />
            é tudo que você precisa em um só lugar.
          </h1>
          <Button>Cadastrar-se</Button>
        </Content>
        <img src={Illustration} alt="Hero Banner Illustration" />
      </BannerWrapper>
    </Container>
  );
};

export default HeroBanner;
