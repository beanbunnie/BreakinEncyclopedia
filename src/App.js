import { LindyHop, WestAfrican, Kungfu, Capoeira, Home, Jazz } from "./pages";

import { BrowserRouter, HashRouter, Router, Route } from "react-router-dom";
// Currently functional using hash
function App() {
  return (
    <HashRouter basename="/">
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/Jazz" element={<Jazz />} />
        <Route path="/Capoeira" element={<Capoeira />} />
        <Route path="/Kungfu" element={<Kungfu />} />
        <Route path="/WestAfrican" element={<WestAfrican />} />
        <Route path="/LindyHop" element={<LindyHop />} />
      </Router>
    </HashRouter>
  );
}

export default App;
