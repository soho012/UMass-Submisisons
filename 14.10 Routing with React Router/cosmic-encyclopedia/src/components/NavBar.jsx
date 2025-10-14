import { Link } from "react-router-dom";
import celestialData from "../data/celestialData";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link to="/">Home</Link>
      {celestialData.map(obj => (
        <Link key={obj.id} to={`/${obj.id}`}>
          {obj.title}
        </Link>
      ))}
    </nav>
  );
}
