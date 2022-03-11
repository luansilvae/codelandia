import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  background: var(--backgroundSecondary);

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    padding: 0;
    max-width: 90%;
    flex-direction: row;

    img {
      width:  50%;
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

  @media screen and (min-width: 580px) {
    text-align: left;

    br {
      display: block;
    }

    h1 {
      max-width: 400px;
    }
  }
`;

export const Button = styled.button`
  background: var(--blue);
  color: var(--white);
  border: none;
  box-shadow: 1px 3px 4px 0px #137de080;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
`;
