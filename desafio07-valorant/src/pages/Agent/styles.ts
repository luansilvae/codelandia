import styled from "styled-components";

interface HeaderProps {
  bgAgent: string;
}

export const Container = styled.div`
  background: var(--white);
`;

export const HeaderAgent = styled.header<HeaderProps>`
  padding-top: 80px;
  width: 100%;
  background: var(--dark);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.bgAgent});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  background-attachment: fixed;
`;

export const TopContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
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
`;

export const BottomContent = styled.section`
  padding: 0 1.6rem;
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
  }

  p {
    line-height: 1.4;
    font-weight: 400;
    font-size: 1.7rem;
    color: #768079;
    max-width: 70rem;
  }
`;
