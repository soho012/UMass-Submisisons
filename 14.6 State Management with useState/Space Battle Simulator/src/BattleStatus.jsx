import React from "react";

function BattleStatus({ status }) {
  let resultMessage = "";
  if (status === "win") {
    resultMessage = "🎉 You win! Congratulations, Commander!";
  } else if (status === "lose") {
    resultMessage = "😵 You lose! The enemy prevailed this time.";
  } else if (status === "draw") {
    resultMessage = "🤝 It's a draw! Both ships are down.";
  }

  return (
    <div style={{ minHeight: 40, margin: "1.2em 0", fontWeight: "bold" }}>
      {resultMessage}
    </div>
  );
}

export default BattleStatus;

