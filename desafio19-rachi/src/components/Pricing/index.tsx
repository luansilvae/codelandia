import React from "react";
import { Button } from "../HeroBanner/styles";

import {
  Container,
  Wrapper,
  PricingHeader,
  PricingGrid,
  PricingCard,
  PricingCardHeader,
} from "./styles";

export const Pricing: React.FC = () => {
  return (
    <Container id="pricing">
      <Wrapper>
        <PricingHeader data-aos="fade-up">
          <h2>Nossos Planos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </p>
        </PricingHeader>

        <PricingGrid data-aos="fade-up" data-aos-delay="300ms">
          <PricingCard data-aos="flip-left" data-aos-delay="500ms">
            <PricingCardHeader>
              <h3>Bronze</h3>
              <h4>
                <span>R$</span>28<span>/mês</span>
              </h4>
            </PricingCardHeader>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mi quis euismod ultrices.
            </p>

            <Button>Assinar</Button>
          </PricingCard>

          <PricingCard className="highlightedCard">
            <PricingCardHeader>
              <h3>Prata</h3>
              <Button>Preferido</Button>
              <h4>
                <span>R$</span>57<span>/mês</span>
              </h4>
            </PricingCardHeader>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mi quis euismod ultrices.
            </p>

            <Button>Assinar</Button>
          </PricingCard>

          <PricingCard data-aos="flip-left" data-aos-delay="500ms">
            <PricingCardHeader>
              <h3>Ouro</h3>
              <h4>
                <span>R$</span>94<span>/mês</span>
              </h4>
            </PricingCardHeader>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia mi quis euismod ultrices.
            </p>

            <Button>Assinar</Button>
          </PricingCard>
        </PricingGrid>
      </Wrapper>
    </Container>
  );
};
