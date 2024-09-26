import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./pages/Home";
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
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
