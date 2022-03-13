export const themes = {
  light: {
    background: "#FFFFFF",
    backgroundSecondary: "#EFF8FF",
    textTitle: "#293145",
    textSubtitle: "#6E7275",
    blue: "#0F9AFE",
    white: "#FFFFFF",
    highlightedCardBackground: "#32394B",
    highlightedCardHover: "#464F65",
    highlightedCardText: "#DBDBDB",
  },
  dark: {
    background: "#293145",
    backgroundSecondary: "#32394B",
    textTitle: "#FFFFFF",
    textSubtitle: "#DBDBDB",
    blue: "#0F9AFE",
    white: "#FFFFFF",
    highlightedCardBackground: "#464F65",
    highlightedCardHover: "#222736",
    highlightedCardText: "#DBDBDB",
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
