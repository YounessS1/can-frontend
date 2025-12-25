// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Matches from "./pages/Matches";
import Standings from "./pages/Standings";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/matches">Matchs</Link> |{" "}
        <Link to="/standings">Classement</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Matches />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </BrowserRouter>
  );
}
