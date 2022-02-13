import React from "react";
import Header from "../../components/Header";
import HomeHero from "../../components/HomeHero";

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
     <Header />
     <HomeHero />
    </Container>
  );
};

export default Home;
