import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./Components";
import { Blogs, CookOff2024, Home } from "./Pages";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events/Cookoff2024" element={<CookOff2024 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
