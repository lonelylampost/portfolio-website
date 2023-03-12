import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import ProjectPage from "./components/projectpage";

const RouteSwitch = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
  );
};

export default RouteSwitch;

