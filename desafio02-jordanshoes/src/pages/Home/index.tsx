import React from "react";
import BlackBar from "../../components/BlackBar";
import Destaques from "../../components/Destaques";

const Home: React.FC = () => {
  return (
    <main>
      <Destaques />
      <BlackBar title="Todos os direitos reservados." />
    </main>
  );
};

export default Home;
