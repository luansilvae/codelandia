import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Nav,
  Brand,
  Valorant,
  ValorantLogo,
  Riot,
  Button,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Brand>
          <Riot />
          <Link to="/">
            <Valorant />
            <ValorantLogo />
          </Link>
        </Brand>

        <Button>Jogue Agora</Button>
      </Nav>
    </Container>
  );
};

export default Header;
