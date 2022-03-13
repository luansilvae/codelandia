import React from "react";
import { AppBanner } from "../../components/AppBanner";
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
      <AppBanner />
    </Container>
  );
};
