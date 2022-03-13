import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useCustomThemeContext } from "./hooks/useCustomTheme";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  const { currentTheme } = useCustomThemeContext();

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
