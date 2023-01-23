import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProjectPage from "./components/projectpage";
import Faq from "./components/Faq";

const RouteSwitch = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<Faq />} />
      </Routes>
  );
};

export default RouteSwitch;

