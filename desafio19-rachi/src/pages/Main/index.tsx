import React from "react";
import Header from "../../components/Header";
import HeroBanner from "../../components/HeroBanner";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeroBanner />
    </Container>
  );
};

export default Main;
