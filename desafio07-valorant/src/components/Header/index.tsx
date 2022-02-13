import React from "react";

import { Container, Nav, Brand, Valorant, ValorantLogo, Riot, Button } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Brand>
          <Riot />
          <Valorant/>
          <ValorantLogo/>
        </Brand>

        <Button>Jogue Agora</Button>
      </Nav>
    </Container>
  );
};

export default Header;
