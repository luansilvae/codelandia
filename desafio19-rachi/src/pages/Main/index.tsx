import React from "react";
import { AppBanner } from "../../components/AppBanner";
import { Header } from "../../components/Header";
import { HeroBanner } from "../../components/HeroBanner";
import { HowItWorks } from "../../components/HowItWorks";
import { Pricing } from "../../components/Pricing";
import { Contact } from "../../components/Contact";

import { Container } from "./styles";
import { Footer } from "../../components/Footer";

export const Main: React.FC = () => {
  return (
    <Container>
      <HeroBanner />
      <HowItWorks />
      <AppBanner />
      <Pricing />
      <Contact />
      <Footer />
    </Container>
  );
};
