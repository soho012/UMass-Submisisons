import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ContentPage from "./pages/ContentPage";
import celestialData from "./data/celestialData";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {celestialData.map(obj => (
          <Route
            key={obj.id}
            path={`/${obj.id}`}
            element={<ContentPage {...obj} />}
          />
        ))}
      </Routes>
    </div>
  );
}
