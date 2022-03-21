import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeName, themes } from "../styles/theme";
import { CustomThemeContextData, CustomThemeProps } from "./ContextProps";

export const CustomThemeContext = createContext({} as CustomThemeContextData);

export function CustomThemeProvider(props: CustomThemeProps) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const storageValue = localStorage.getItem("theme");

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return "light";
    }
  });

  const [currentTheme, setCurrentTheme] = useState(themes[themeName]);

  useEffect(() => {
    setCurrentTheme(themes[themeName]);
  }, [themeName]);

  const newTheme = useMemo(
    () => (themeName === "light" ? "dark" : "light"),
    [themeName]
  );

  const toggleTheme = useCallback(() => {
    setThemeName(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  }, [newTheme]);

  return (
    <CustomThemeContext.Provider
      value={{ toggleTheme, currentTheme, themeName }}
    >
      {props.children}
    </CustomThemeContext.Provider>
  );
}
