import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./Components";
import { Blogs, CookOff2024, Home, BlogPage, Batch24  } from "./Pages";
import JoinUs from "./Pages/JoinUs";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/events/Cookoff2024" element={<CookOff2024 />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/leads" element={<Batch24 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
