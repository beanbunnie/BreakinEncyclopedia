import { LindyHop, WestAfrican, Kungfu, Capoeira, Home, Jazz } from "./pages";

import { HashRouter, Routes, Route } from "react-router-dom";
// Currently functional using hash
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
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
