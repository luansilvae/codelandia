import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { ThemeName, themes, ThemeType } from "../styles/theme";

interface CustomThemeProps {
  children: ReactNode;
}

interface CustomThemeContextData {
  toggleTheme: () => void;
  currentTheme: ThemeType;
  themeName: ThemeName;
}

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

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    localStorage.setItem("theme", JSON.stringify(themeName === "light" ? "dark" : "light"));
  };

  return (
    <CustomThemeContext.Provider
      value={{ toggleTheme, currentTheme, themeName }}
    >
      {props.children}
    </CustomThemeContext.Provider>
  );
}
