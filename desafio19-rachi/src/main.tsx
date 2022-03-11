import { render } from "react-dom";
import App from "./App";
import { CustomThemeProvider } from "./contexts/CustomThemeProvider";

render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>,
  document.getElementById("root")
);
