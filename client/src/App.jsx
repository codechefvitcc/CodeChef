// Importing default packages
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

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

function PageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <PageTracking />
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
