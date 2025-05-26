// MissionFilter.jsx
import React from "react";

const STATUSES = ["All", "Planned", "Active", "Completed"];

function MissionFilter({ currentFilter, onFilterChange }) {
  return (
    <div style={{ margin: "1em 0" }}>
      <strong>Filter Missions:</strong>{" "}
      {STATUSES.map(status => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          style={{
            marginRight: 8,
            fontWeight: currentFilter === status ? "bold" : "normal",
            background: currentFilter === status ? "#eee" : ""
          }}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default MissionFilter;
