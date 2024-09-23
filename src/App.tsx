import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./pages/Home";

const App = () => {
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
