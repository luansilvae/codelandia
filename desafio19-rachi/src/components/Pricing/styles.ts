import styled from "styled-components";

export const Container = styled.section`
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1320px;
  }
`;

export const PricingHeader = styled.header`
  text-align: center;

  h2 {
    color: var(--textTitle);
    margin-bottom: 1.4rem;
  }

  p {
    color: var(--textSubtitle);
    line-height: 2.3rem;
    max-width: 570px;
  }
`;

export const PricingCardHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  h3,
  h4 {
    color: var(--textTitle);
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 4rem;
    font-family: "Roboto", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;

    span:nth-child(1) {
      align-self: flex-start;
      font-size: 1.8rem;
      margin-top: 0.7rem;
    }

    span:nth-child(2) {
      align-self: flex-end;
      font-size: 1.8rem;
      margin-bottom: 0.7rem;
    }
  }
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: var(--backgroundSecondary);
  border-radius: 8px;
  min-height: 45rem;
  text-align: center;

  > p {
    color: var(--textSubtitle);
    font-size: 1.6rem;
    max-width: 80%;
  }

  &.highlightedCard {
    background: var(--highlightedCardBackground);
    grid-row: 1;
    min-height: 47rem;
    align-self: flex-start;

    > p {
      color: var(--highlightedCardText);
    }

    ${PricingCardHeader} {
      h3,
      h4 {
        color: var(--white);
      }

      h3 {
        font-size: 2.7rem;
      }

      > button {
        padding: 0.6rem 2rem;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        font-size: 1.1rem;
      }
    }

    transition: background-color 200ms ease-out;

    &:hover {
      background-color: var(--highlightedCardHover);
      transition: background-color 200ms ease-in;
    }

    @media (min-width: 768px) {
      grid-column: span 2;
    }

    @media (min-width: 1024px) {
      grid-row: initial;
      grid-column: initial;
    }
  }
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-end;
  gap: 20px;
  padding: 50px 0 0;

  @media (min-width: 768px) {
    max-width: 90vw;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
