import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./Components";
import { Home } from "./Pages";
import CookOff2024 from "./Pages/Events/Cookoff2024";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cookoff2024" element={<CookOff2024 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
