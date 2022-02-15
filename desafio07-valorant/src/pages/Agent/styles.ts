import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    background: var(--dark);
  }
`;

export const HeaderAgent = styled.header`
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 80% 20%;
    max-width: 1300px;
    padding: 80px 1.6rem;
    height: 100vh;
    margin: 0 auto;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-auto-flow: dense;
    direction: rtl;
    grid-template-columns: 60% 40%;
  }
`;

export const AgentBio = styled.section`
  padding: 5rem 1.6rem;
  background: var(--white);
  width: 100%;

  h1 {
    font-weight: 600;
    font-size: 6rem;
    line-height: 5rem;
    letter-spacing: -2px;
    color: var(--dark);
    text-transform: uppercase;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    color: #383e3a;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.25;
    margin: 30px 0 15px;
  }

  p {
    line-height: 1.4;
    font-weight: 400;
    font-size: 1.7rem;
    color: #768079;
    max-width: 70rem;
  }

  @media (min-width: 768px) {
    p,
    h2 {
      direction: ltr;
      text-align: right;
    }
  }

  @media (min-width: 768px) {
    background: none;
    padding: 0;
    h1,
    h2,
    p {
      color: var(--white);
    }

    h1 {
      font-size: 10rem;
    }

    h2,
    p {
      font-size: 1.4rem;
    }
  }
`;

export const BottomContent = styled.section`
  padding: 0 1.6rem 5rem;
  background: var(--white);
  width: 100%;

  span {
    font-family: "Roboto", sans-serif;
    color: #383e3a;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 {
    font-weight: 600;
    font-size: 6rem;
    line-height: 5rem;
    letter-spacing: -2px;
    color: var(--dark);
    margin: 10px 0 30px;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }

  p {
    line-height: 1.4;
    font-weight: 400;
    font-size: 1.7rem;
    color: #768079;
    max-width: 70rem;
  }

  @media (min-width: 768px) {
    padding-top: 5rem;
  }

  @media (min-width: 1024px) {
    background: none;
    padding: 0;
    h1,
    p,
    span {
      color: var(--white);
    }

    span,
    p {
      font-size: 1.4rem;
    }
  }
`;
