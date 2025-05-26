import React from "react";

function BattleButton({ status, onFire, onRestart }) {
  if (status === "active") {
    return (
      <button
        onClick={onFire}
        style={{
          padding: "0.75em 2em",
          background: "#0cf",
          border: "none",
          borderRadius: 8,
          fontSize: "1.1em",
          cursor: "pointer",
          margin: "1em 0"
        }}
      >
        ☄️ Fire!
      </button>
    );
  } else {
    return (
      <button
        onClick={onRestart}
        style={{
          padding: "0.75em 2em",
          background: "#fc0",
          border: "none",
          borderRadius: 8,
          fontSize: "1.1em",
          cursor: "pointer"
        }}
      >
        🔄 Restart
      </button>
    );
  }
}

export default BattleButton;
