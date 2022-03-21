import styled from "styled-components";

export const Container = styled.section`
  padding: 50px 0;

  h2 {
    text-align: center;
    color: var(--textTitle);
  }
`;

export const GridContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1280px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  @media (min-width: 768px) {
    &:nth-child(3) {
      grid-column: span 3;
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(3) {
      grid-column: unset;
    }
  }

  svg {
    width: 5.7rem;
    height: 5.7rem;
  }

  h3 {
    color: var(--textTitle);
    margin: 25px 0 15px;
  }

  p {
    color: var(--textSubtitle);
    max-width: 300px;
    line-height: 26px;
  }
`;
