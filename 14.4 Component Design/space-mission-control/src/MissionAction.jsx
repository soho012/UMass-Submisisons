// MissionAction.jsx
import React from "react";

const POSSIBLE_STATUSES = ["Planned", "Active", "Completed"];

function MissionAction({ status, onStatusChange }) {
  return (
    <div>
      {POSSIBLE_STATUSES.filter(s => s !== status).map(s => (
        <button key={s} onClick={() => onStatusChange(s)} style={{ marginRight: 8 }}>
          Set to {s}
        </button>
      ))}
    </div>
  );
}

export default MissionAction;
