import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home } from "./Pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
