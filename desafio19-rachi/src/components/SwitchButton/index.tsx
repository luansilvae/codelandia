import React from "react";
import { useCustomThemeContext } from "../../hooks/useCustomTheme";
import styled from "styled-components";

export const SwitchButton: React.FC = () => {
  const { themeName, toggleTheme } = useCustomThemeContext();
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        onChange={toggleTheme}
        checked={themeName === "dark"}
        title="Toggle theme"
        aria-label="Toggle theme"
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

const CheckBoxWrapper = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  left: 0;
  width: 45px;
  height: 25px;
  border-radius: 50px;
  background: #bebebe;

  &::after {
    content: "";
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 25px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 45px;
  height: 25px;

  &:hover {
    cursor: pointer;
  }

  &:checked + ${CheckBoxLabel} {
    background: var(--blue);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      border-radius: 50px;
      width: 25px;
      height: 25px;
      margin-left: 20px;
      background: #ffffff;
      box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
      transition: 0.2s;
    }
  }
`;
