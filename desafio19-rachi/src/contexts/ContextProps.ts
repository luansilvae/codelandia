import { ReactNode } from "react";
import { ThemeName, ThemeType } from "../styles/theme";

export interface CustomThemeProps {
  children: ReactNode;
}

export interface CustomThemeContextData {
  toggleTheme: () => void;
  currentTheme: ThemeType;
  themeName: ThemeName;
}