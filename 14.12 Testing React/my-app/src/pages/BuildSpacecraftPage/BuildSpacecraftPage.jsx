import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildSpacecraft } from "../../services/SpaceTravelApi";
import styles from "./BuildSpacecraftPage.module.css";

export default function BuildSpacecraftPage() {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !capacity || !description) {
      setError("⚠️ All fields are required!");
      return;
    }

    const response = await buildSpacecraft({
      name,
      capacity: parseInt(capacity, 10),
      description,
      pictureUrl: "https://emojiapi.dev/api/v1/rocket/128.png",
    });

    if (!response.isError) {
      navigate("/spacecrafts"); // redirect back to spacecraft list
    } else {
      setError("⚠️ Failed to build spacecraft.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>🛠 Build a New Spacecraft</h1>

      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Capacity:
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <div className={styles.actions}>
          <button type="submit">🚀 Build</button>
          <button type="button" onClick={() => navigate("/spacecrafts")}>
            ⬅ Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
