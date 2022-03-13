import { useContext } from "react";
import { CustomThemeContext } from "../contexts/CustomThemeProvider";

function useCustomThemeContext() {
  const { currentTheme, toggleTheme, themeName } =
    useContext(CustomThemeContext);

  return { currentTheme, toggleTheme, themeName };
}

export { useCustomThemeContext };
