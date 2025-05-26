import React, { useEffect, useState } from "react";
import './App.css';

function DeckOfCards() {
  const [deckId, setDeckId] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [remaining, setRemaining] = useState(52);
  const [isShuffling, setIsShuffling] = useState(false);

  // Fetch a new deck on mount
  useEffect(() => {
    async function getDeck() {
      const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      const data = await res.json();
      setDeckId(data.deck_id);
      setRemaining(data.remaining);
    }
    getDeck();
  }, []);

  // Draw a card
  async function drawCard() {
    if (remaining === 0) {
      alert("Error: no cards remaining!");
      return;
    }
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await res.json();
    if (data.success && data.cards.length > 0) {
      setDrawnCards(d => [...d, data.cards[0]]);
      setRemaining(data.remaining);
    } else {
      alert("Error: no cards remaining!");
    }
  }

  // Shuffle deck
  async function shuffleDeck() {
    if (!deckId) return;
    setIsShuffling(true);
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    const data = await res.json();
    if (data.success) {
      setDrawnCards([]);
      setRemaining(52);
    }
    setIsShuffling(false);
  }

  return (
    <div className="deck-container">
      <h2>🃏 Card Drawer</h2>
      <button
        className="draw-btn shuffle"
        onClick={shuffleDeck}
        disabled={!deckId || isShuffling}
      >
        {isShuffling ? "Shuffling..." : "🔄 Shuffle Deck"}
      </button>

      <button
        className="draw-btn"
        onClick={drawCard}
        disabled={!deckId || remaining === 0 || isShuffling}
      >
        GIMME A CARD!
      </button>

      <div className="card-stack">
        {drawnCards.slice(-3).map((card, idx) => (
          <img
            key={card.code + idx}
            src={card.image}
            alt={card.code}
            className="card-img"
            style={{ zIndex: idx }}
          />
        ))}
      </div>
      <div className="cards-remaining">Cards remaining: {remaining}</div>
    </div>
  );
}

export default DeckOfCards;
