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
  AboutUs,
  Error404
} from "./Pages";
import JoinUs from "./Pages/JoinUs";
import Events from "./Pages/Events";
import EventPage from "./Pages/EventPage";

ReactGA.initialize("G-KNNN0M8KPB");

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/c" element={<CookOff2024 />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/our-teams" element={<Batch24 />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
