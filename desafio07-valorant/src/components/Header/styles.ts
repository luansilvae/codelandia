import styled from "styled-components";
import RiotLogo from "../iconsComponents/RiotLogo";
import ValorantIcon from "../iconsComponents/ValorantIcon";
import ValorantText from "../iconsComponents/ValorantText";

export const Container = styled.header`
  background: var(--black);
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.6rem;

  @media (min-width: 768px) {
    max-width: 1300px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
`;

export const Riot = styled(RiotLogo)`
  path {
    fill: var(--white);
  }
  cursor: pointer;
  width: 95px;
  height: 32px;
  flex-shrink: 0;
  padding-right: 1.5rem;
  border-right: solid 1px #dddddd;

  :hover {
    path {
      fill: #B03336;
    }
  }
`;

export const Valorant = styled(ValorantIcon)`
  path {
    fill: var(--white);
  }

  width: 38px;
  height: 26px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ValorantLogo = styled(ValorantText)`
  display: none;
  path {
    fill: var(--white);
  }

  width: 109px;
  height: 40px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: linear-gradient(
    135deg,
    rgb(255, 51, 66) 0%,
    rgb(255, 48, 64) 0.01%,
    rgb(255, 125, 102) 100%
  );
  color: var(--black);
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.5rem 1rem;
  text-align: center;
  line-height: 16px;

  border-radius: 12px;
`;
