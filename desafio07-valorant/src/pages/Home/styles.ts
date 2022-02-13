import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Agents = styled.section`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 5rem 1.6rem;
  margin: 0 auto;

  h2 {
    font-weight: 600;
    font-size: 6rem;
    line-height: 5rem;
    letter-spacing: -2px;
    color: var(--dark);
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  span {
    color: #383e3a;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.25;
  }

  p {
    line-height: 1.4;
    font-weight: 400;
    font-size: 1.7rem;
    color: #768079;
    max-width: 70rem;
  }

  @media (min-width: 768px) {
    max-width: 1300px;

    h2 {
      font-size: 8rem;
      line-height: 6rem;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 30px;
    h2 {
      font-size: 10rem;
      line-height: 7rem;
    }
  }
`;

export const AgentsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  @media (min-width:768px) {
    max-width: 1300px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width:1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
