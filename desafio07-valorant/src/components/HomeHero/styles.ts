import styled from "styled-components";

import ValorantText from "../iconsComponents/ValorantText";

export const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 490px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: calc(100vh - 80px);
  }
`;

export const Video = styled.video`
  position: fixed;
  top: 80px;
  left: 0;
  object-fit: cover;
  width: 100%;
  min-height: 490px;

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 100;
  margin: 0 auto;
  padding: 8rem 4rem 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 5rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.8rem;

  span {
    color: var(--white);
    font-family: "Roboto", sans-serif;
    font-size: 1.7rem;
    line-height: 1.4;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const ValorantLogo = styled(ValorantText)`
  width: 100%;
  height: 100%;

  max-width: 60rem;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  background: var(--red);
  color: var(--white);
  padding: 1.9rem 3rem;
  font-weight: 700;
  width: 25rem;
  font-size: 1.8rem;
  transition: all 200ms ease-in-out;

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  :hover {
    background: var(--dark);
  }
`;
