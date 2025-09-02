import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import BuildSpacecraftPage from "../pages/BuildSpacecraftPage/BuildSpacecraftPage";

// inside <Routes>
<Route path="/spacecrafts/new" element={<BuildSpacecraftPage />} />

function SpacecraftsPage() {
  return <h2>🚀 Spacecrafts Page (placeholder)</h2>;
}

function PlanetsPage() {
  return <h2>🪐 Planets Page (placeholder)</h2>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/spacecrafts" element={<SpacecraftsPage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
