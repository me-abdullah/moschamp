import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useState } from "react";

import Helmet from "react-helmet";

import "./App.css";

import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Famee from "./pages/Famee";
import Faq from "./pages/Faq";
import Funding from "./pages/Funding";
import Home from "./pages/Home";
import Past from "./pages/Past";
import Promote from "./pages/Promote";
import Rules from "./pages/Rules";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [isScaling, setIsScaling] = useState(false);

  return (
    <BrowserRouter>
      <Cursor scaling={isScaling} />
      <Helmet>
        <title>Microsoft Office Championship in Pakistan</title>
        <meta
          name="description"
          content="Microsoft Office Championship in Pakistan Provide Best International certifications In Pakistan, we offer Microsoft Word, Microsoft Excel, Microsoft PowerPoint."
        />
        <meta name="keywords" content="Championship, Certification, MS-Office, Microsoft Champions"/>
      </Helmet>
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
