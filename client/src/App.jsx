// Importing default packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import "react-toastify/dist/ReactToastify.css";

// Importing Components
import { Footer, Navbar, ScrollToTop } from "./Components";
import {
  Blogs,
  CookOff2024,
  DecodeDSA,
  Home,
  BlogPage,
  Batch24,
} from "./Pages";
import JoinUs from "./Pages/JoinUs";

ReactGA.initialize("G-KNNN0M8KPB");

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/events/Cook-Off-2024" element={<CookOff2024 />} />
        {/* <Route path="/events/Decode-DSA" element={<DecodeDSA />} /> */}
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/our-teams" element={<Batch24 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
