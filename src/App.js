import { BrowserRouter } from "react-router-dom";

import { useState } from "react";

import "./App.css";

import Pastcomp from "./components/Past Comp/Pastcomp";
import About from "./components/About/About";
import Certified from "./components/Certified/Certified";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Deadline from "./components/Deadline/Deadline";
import Fame from "./components/Fame/Fame";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Promotion from "./components/Promotion/Promotion";
import Rules from "./components/Rules/Rules";
import Win from "./components/Win/Win";

function App() {

  const [isScaling, setIsScaling] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        <Cursor scaling={isScaling} />
        <Navbar />
        <Header />
        <About />
        <Certified />
        <Win />
        <Deadline />
        <Promotion />
        <Rules />
        <Pastcomp />
        <Fame />
        <Contact />
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;
