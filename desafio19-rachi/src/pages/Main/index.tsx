import React from "react";
import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import { HowItWorks } from "../../components/HowItWorks";

import { Container } from "./styles";

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <HeroBanner />
      <HowItWorks />
    </Container>
  );
};
