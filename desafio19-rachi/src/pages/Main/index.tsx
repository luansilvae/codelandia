import React from "react";
import Header from "../../components/Header";

import { Container } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>Hello world</h1>
      <h2>Teste</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas
        praesentium suscipit hic dolor, nostrum ipsa cum iste! Fuga iusto
        reiciendis nihil at veniam officiis obcaecati voluptatum, dolorem
        voluptatibus explicabo nisi voluptates expedita ab soluta. Nostrum at
        ipsum provident tenetur quisquam facere totam obcaecati expedita.
      </p>
    </Container>
  );
};

export default Main;
