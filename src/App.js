import { LindyHop, WestAfrican, Kungfu, Capoeira, Home, Jazz } from "./pages";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
// Currently functional using hashrouter
function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route exact path="/BreakinEncyclopedia/" element={<Home />} />
        <Route path="/BreakinEncyclopedia/Jazz" element={<Jazz />} />
        <Route path="/BreakinEncyclopedia/Capoeira" element={<Capoeira />} />
        <Route path="/BreakinEncyclopedia/Kungfu" element={<Kungfu />} />
        <Route
          path="/BreakinEncyclopedia/WestAfrican"
          element={<WestAfrican />}
        />
        <Route path="/BreakinEncyclopedia/LindyHop" element={<LindyHop />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
