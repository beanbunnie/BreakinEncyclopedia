import { LindyHop, WestAfrican, Kungfu, Capoeira, Home, Jazz } from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jazz" element={<Jazz />} />
          <Route path="/Capoeira" element={<Capoeira />} />
          <Route path="/Kungfu" element={<Kungfu />} />
          <Route path="/WestAfrican" element={<WestAfrican />} />
          <Route path="/LindyHop" element={<LindyHop />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
