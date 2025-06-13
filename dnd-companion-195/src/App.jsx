import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterBuilder from "./pages/CBuild";
import CharChoose from "./pages/charChoose";
import Companion from "./pages/companion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/characterBuild" element={<CharacterBuilder />} />
        <Route path ="/*" element={<CharChoose />} />
        <Route path="/companion/:name" element={<Companion />} />

        
      </Routes>
    </Router>
  );
}

export default App;
