import React from "react";
import Switch from "react-switch";
import { FiSun, FiMoon } from "react-icons/fi";
import useCustomThemeContext from "../../hooks/useCustomTheme";

const SwitchButton: React.FC = () => {
  const { themeName, toggleTheme, currentTheme } = useCustomThemeContext();
  return (
    <Switch
      onChange={toggleTheme}
      checkedIcon={
        <FiSun
          color={currentTheme.background}
          size={20}
          style={{ margin: "4px" }}
        />
      }
      uncheckedIcon={
        <FiMoon
          color={currentTheme.textSubtitle}
          size={20}
          style={{ margin: "4px" }}
        />
      }
      checked={themeName === "light"}
      offColor={currentTheme.highlightedCardBackground}
      onColor={currentTheme.textSubtitle}
    />
  );
};

export default SwitchButton;
