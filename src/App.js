import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import "./App.css";

import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Faq from "./pages/Faq";
import Promote from "./pages/Promote";
import Past from "./pages/Past";
import Famee from "./pages/Famee";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Funding from "./pages/Funding";
function App() {
  const [isScaling, setIsScaling] = useState(false);

  return (
    <BrowserRouter>
      <Cursor scaling={isScaling} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/past" element={<Past />} />
        <Route path="/fame" element={<Famee />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/funding" element={<Funding />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
