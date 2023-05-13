import { LindyHop, WestAfrican, Kungfu, Capoeira, Home, Jazz } from "./pages";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
// Currently functional using hashrouter
function App() {
  return (
    <HashRouter basename="/BreakinEncyclopedia">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jazz" element={<Jazz />} />
        <Route path="/Capoeira" element={<Capoeira />} />
        <Route path="/Kungfu" element={<Kungfu />} />
        <Route path="/WestAfrican" element={<WestAfrican />} />
        <Route path="/LindyHop" element={<LindyHop />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
