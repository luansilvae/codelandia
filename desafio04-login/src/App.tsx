import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;