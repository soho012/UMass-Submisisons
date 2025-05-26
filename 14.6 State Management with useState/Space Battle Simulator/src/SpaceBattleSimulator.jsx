import React, { useState } from "react";
import BattleStatus from "./BattleStatus";
import BattleButton from "./BattleButton";
import HealthBar from "./HealthBar";

// Helper function to get random damage in [min, max]
function getRandomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const INITIAL_HEALTH = 100;

function SpaceBattleSimulator({ minDamage = 5, maxDamage = 20 }) {
  const [playerHealth, setPlayerHealth] = useState(INITIAL_HEALTH);
  const [enemyHealth, setEnemyHealth] = useState(INITIAL_HEALTH);
  const [gameStatus, setGameStatus] = useState("active"); // "active" | "win" | "lose" | "draw"

  // Handle attack
  function handleFire() {
    if (gameStatus !== "active") return;

    const playerDamage = getRandomDamage(minDamage, maxDamage);
    const enemyDamage = getRandomDamage(minDamage, maxDamage);

    const newEnemyHealth = Math.max(enemyHealth - playerDamage, 0);
    const newPlayerHealth = Math.max(playerHealth - enemyDamage, 0);

    setEnemyHealth(newEnemyHealth);
    setPlayerHealth(newPlayerHealth);

    // Check for game end
    if (newEnemyHealth === 0 && newPlayerHealth === 0) {
      setGameStatus("draw");
    } else if (newEnemyHealth === 0) {
      setGameStatus("win");
    } else if (newPlayerHealth === 0) {
      setGameStatus("lose");
    }
  }

  // Reset game
  function handleRestart() {
    setPlayerHealth(INITIAL_HEALTH);
    setEnemyHealth(INITIAL_HEALTH);
    setGameStatus("active");
  }

  return (
    <div style={{
      maxWidth: 350, margin: "2em auto", border: "2px solid #444",
      borderRadius: 16, padding: 24, textAlign: "center", background: "#222", color: "#fafafa"
    }}>
      <h1>🚀 Space Battle Simulator 🎇</h1>
      <HealthBar playerHealth={playerHealth} enemyHealth={enemyHealth} />
      <BattleStatus status={gameStatus} />
      <BattleButton
        status={gameStatus}
        onFire={handleFire}
        onRestart={handleRestart}
      />
    </div>
  );
}

export default SpaceBattleSimulator;
