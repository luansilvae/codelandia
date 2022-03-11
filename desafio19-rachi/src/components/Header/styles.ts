import styled, { css } from "styled-components";

import { FiMenu, FiX } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  margin: auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    max-width: 90vw;
    padding: 0;
  }
`;

export const Logo = styled.img`
  max-width: 100px;
`;

export const ToggleButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const iconStyle = css`
  fill: var(--textTitle);
  width: 32px;
  height: 32px;
`;

export const MenuButton = styled(FiMenu)`
  ${iconStyle}
`;

export const CloseButton = styled(FiX)`
  ${iconStyle}
`;

export const Menu = styled.ul<{ activeToggle: boolean }>`
  display: none;
  gap: 4rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LinkMenu = styled.a`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--textSubtitle);
  position: relative;

  &::after {
    display: block;

    content: "";
    width: 0;
    height: 2.5px;
    background: var(--blue);
    margin: auto;
    position: absolute;
    left: 0;

    transition: width 0.4s;
  }

  &:hover {
    cursor: pointer;

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  top: 0;
  left: 0;
  background: var(--background);
  margin-top: 70px;
  height: calc(100vh - 70px);
  width: 100%;

  ${LinkMenu} {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
