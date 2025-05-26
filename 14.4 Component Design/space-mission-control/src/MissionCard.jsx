// MissionCard.jsx
import React from "react";

function MissionCard({ name, status, crew }) {
  return (
    <div style={{ marginBottom: "0.5em" }}>
      <h3>{name}</h3>
      <p>Status: <strong>{status}</strong></p>
      <p>Crew: {crew.join(", ")}</p>
    </div>
  );
}

export default MissionCard;
