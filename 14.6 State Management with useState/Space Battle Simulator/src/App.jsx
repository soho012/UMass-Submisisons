import React from "react";
import SpaceBattleSimulator from "./SpaceBattleSimulator";

function App() {
  return (
    <div>
      <SpaceBattleSimulator minDamage={5} maxDamage={20} />
    </div>
  );
}

export default App;
