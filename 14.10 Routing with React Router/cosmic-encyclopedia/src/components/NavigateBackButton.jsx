import { useNavigate } from "react-router-dom";

export default function NavigateBackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} style={{ marginTop: "1rem" }}>
      ⬅ Go Back
    </button>
  );
}
