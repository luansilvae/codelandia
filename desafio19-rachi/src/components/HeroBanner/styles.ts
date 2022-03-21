import styled from "styled-components";

export const Container = styled.section`
  max-width: 100vw;
  width: 100%;
  background: var(--backgroundSecondary);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: calc(100vh - 70px);
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  padding: 30px 20px;
  gap: 30px;

  img {
    width: 100%;
    max-width: 500px;
  }

  @media (min-width: 768px) {
    max-width: 1320px;
    flex-direction: row;

    img {
      width: 50%;
    }
  }
`;

export const Content = styled.div`
  text-align: center;

  br {
    display: none;
  }

  h1 {
    color: var(--textTitle);
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    text-align: left;

    br {
      display: block;
    }

    h1 {
      max-width: 400px;

      @media (min-width: 1024px) {
        font-size: 4rem;
        max-width: 600px;
      }
    }
  }
`;

export const Button = styled.button`
  background: var(--blue);
  color: var(--white);
  border: none;
  box-shadow: 1px 3px 4px 0px #137de080;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 14px;

  transition: background-color 200ms ease-out;

  &:hover {
    cursor: pointer;
    background-color: #108fe3;
  }

  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;
