import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import OfferWidget from "./layouts/OfferWidget";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Rooms from "./pages/Rooms";
import { initLanguage } from "./utils/i18n";

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Initialiser la langue de l'application
    initLanguage();
  }, [i18n]);

  return (
    <BrowserRouter>
      <Navbar />
      <OfferWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
