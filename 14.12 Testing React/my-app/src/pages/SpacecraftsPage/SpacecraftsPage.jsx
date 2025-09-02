import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSpacecrafts, destroySpacecraftById } from "../../services/SpaceTravelApi";
import styles from "./SpacecraftsPage.module.css";

export default function SpacecraftsPage() {
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load spacecrafts
  useEffect(() => {
    async function fetchData() {
      const response = await getSpacecrafts();
      console.log("DEBUG: Spacecraft API Response", response);

      if (!response.isError) {
        setSpacecrafts(response.data);
      } else {
        console.error("Failed to load spacecrafts:", response);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Destroy handler
  const handleDestroy = async (id) => {
    await destroySpacecraftById({ id });
    // Refresh list after delete
    const response = await getSpacecrafts();
    if (!response.isError) {
      setSpacecrafts(response.data);
    }
  };

  if (loading) {
    return <p style={{ color: "white" }}>Loading spacecrafts...</p>;
  }

  return (
    <div className={styles.container}>
      <h1>🚀 Spacecrafts</h1>

      <div style={{ marginBottom: "1rem" }}>
        <Link to="/spacecrafts/new" className={styles.buildBtn}>
          🛠 Build a Spacecraft
        </Link>
      </div>

      {spacecrafts.length === 0 ? (
        <p style={{ color: "white" }}>No spacecraft yet. Click "Build a Spacecraft".</p>
      ) : (
        <div className={styles.list}>
          {spacecrafts.map((sc) => (
            <div key={sc.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img
                  src={sc.pictureUrl || "https://emojiapi.dev/api/v1/rocket/128.png"}
                  alt="spacecraft"
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <p><strong>Name:</strong> {sc.name}</p>
                <p><strong>Capacity:</strong> {sc.capacity}</p>
                <p><strong>Description:</strong> {sc.description}</p>
              </div>
              <button
                className={styles.destroyBtn}
                onClick={() => handleDestroy(sc.id)}
              >
                💥 Destroy
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
