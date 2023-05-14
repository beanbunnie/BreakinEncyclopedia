import { LindyHop, WestAfrican, Kungfu, Capoeira, Home, Jazz } from "./pages";

import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
// Currently functional using hash
function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Jazz" element={<Jazz />} />
        <Route exact path="/Capoeira" element={<Capoeira />} />
        <Route exact path="/Kungfu" element={<Kungfu />} />
        <Route exact path="/WestAfrican" element={<WestAfrican />} />
        <Route exact path="/LindyHop" element={<LindyHop />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
