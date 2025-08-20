import { useState, useEffect } from "react";
import Star from "./Star";


const STAR_SIZE = 30; // keep consistent

export default function Space() {
  const [stars, setStars] = useState([]);

  // Generate random position for a new star
  const generateStar = () => {
    const id = Date.now() + Math.random(); // unique ID
    const x = Math.random() * (window.innerWidth - STAR_SIZE);
    const y = Math.random() * (window.innerHeight - STAR_SIZE);
    return { id, position: { x, y } };
  };

  // Add star
  const addStar = () => {
    setStars((prev) => [...prev, generateStar()]);
  };

  // Destroy star
  const destroyStar = (id) => {
    setStars((prev) => prev.filter((star) => star.id !== id));
  };

  // Effect to spawn stars every 2.5s
  useEffect(() => {
    const interval = setInterval(addStar, 2500);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          position={star.position}
          destroyStar={destroyStar}
        />
      ))}
    </div>
  );
}
