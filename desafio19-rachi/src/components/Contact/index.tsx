import React from "react";
import { Button } from "../HeroBanner/styles";

import { Container, Wrapper, FormContact, ContactHeader, InputGroup } from "./styles";

export const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <ContactHeader>
          <h2>Contato</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
        </ContactHeader>

        <FormContact>
          <InputGroup>
            <input type="text" placeholder="Seu melhor e-mail" id="email" />
            <label htmlFor="email"></label>
          </InputGroup>
          <Button>Enviar</Button>
        </FormContact>
      </Wrapper>
    </Container>
  );
};
