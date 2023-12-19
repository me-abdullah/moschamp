import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Suspense, lazy, useState } from "react";

import Helmet from "react-helmet";

import "./App.css";

import Loading from './pages/Loading';
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
const About = lazy(() => import('./pages/About'));
const Famee = lazy(() => import('./pages/Famee'));
const Faq = lazy(() => import('./pages/Faq'));
const Funding = lazy(() => import('./pages/Funding'));
const Home = lazy(() => import('./pages/Home'));
const Past = lazy(() => import('./pages/Past'));
const Promote = lazy(() => import('./pages/Promote'));
const Rules = lazy(() => import('./pages/Rules'));
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  const [isScaling, setIsScaling] = useState(false);

  return (
    <BrowserRouter>
      <Cursor scaling={isScaling} />
      <Helmet>
        <title>
          Microsoft Championship Pakistan | MS Office International
          Certifications
        </title>
        <meta
          name="description"
          content="Unlock success with Microsoft Championship Pakistan. Explore our MS Office international certifications and join the champions of productivity. Your path to excellence starts here."
        />
        <meta
          name="keywords"
          content="Championship, Certification, MS-Office, Microsoft Champions"
        />
      </Helmet>
      <Navbar />
     
      <Suspense fallback={<Loading />}>
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
      </Suspense>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
