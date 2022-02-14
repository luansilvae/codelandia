import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Agent from "./pages/Agent";
import Home from "./pages/Home";

import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:agentId" element={<Agent />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
