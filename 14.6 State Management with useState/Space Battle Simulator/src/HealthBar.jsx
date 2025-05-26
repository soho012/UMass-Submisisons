import React from "react";

function HealthBar({ playerHealth, enemyHealth }) {
  return (
    <div style={{ margin: "1em 0", fontSize: "1.2em" }}>
      <div>
        <strong>Player Health:</strong> <span style={{ color: "#6df56d" }}>{playerHealth}</span>
      </div>
      <div>
        <strong>Enemy Health:</strong> <span style={{ color: "#fa6363" }}>{enemyHealth}</span>
      </div>
    </div>
  );
}

export default HealthBar;
