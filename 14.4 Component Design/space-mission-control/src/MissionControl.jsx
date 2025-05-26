// MissionControl.jsx
import React, { useState } from "react";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

function MissionControl({ missions: initialMissions }) {
  const [missions, setMissions] = useState(initialMissions);
  const [filter, setFilter] = useState("All");

  // Change status of a specific mission
  const handleStatusChange = (id, newStatus) => {
    setMissions(missions =>
      missions.map(m =>
        m.id === id ? { ...m, status: newStatus } : m
      )
    );
  };

  // Handle changing the filter
  const handleFilterChange = (newFilter) => setFilter(newFilter);

  // Filter missions by status
  const filteredMissions =
    filter === "All"
      ? missions
      : missions.filter(m => m.status === filter);

  return (
    <div>
      <h1>🚀 Space Mission Control</h1>
      <MissionFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      {filteredMissions.length === 0 ? (
        <p>No missions found.</p>
      ) : (
        filteredMissions.map(mission => (
          <div key={mission.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: "1em", marginBottom: "1em" }}>
            <MissionCard {...mission} />
            <MissionAction
              status={mission.status}
              onStatusChange={newStatus => handleStatusChange(mission.id, newStatus)}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default MissionControl;
