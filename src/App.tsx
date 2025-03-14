import React, { useState, useEffect } from "react";
import { Card, CardType } from "./components/Card";

const emojis = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍍", "🍓", "🍑"];

const initializeDeck = (): CardType[] => {
  const deck = emojis.flatMap((emoji, index) => {
    const firstCard: CardType = {
      id: index * 2,
      emoji,
      isFlipped: false,
      isMatched: false,
    };
    const secondCard: CardType = {
      id: index * 2 + 1,
      emoji,
      isFlipped: false,
      isMatched: false,
    };
    return [firstCard, secondCard];
  });

  // Shuffle the deck (Fisher-Yates algorithm)
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const App: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [disableAll, setDisableAll] = useState(false);

  useEffect(() => {
    setCards(initializeDeck());
  }, []);

  // Check for match when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      setDisableAll(true);
      const [first, second] = flippedCards;

      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === first.id || card.id === second.id) {
              if (first.emoji === second.emoji) {
                // It's a match!
                return { ...card, isMatched: true };
              } else {
                // Not a match: flip back
                return { ...card, isFlipped: false };
              }
            }
            return card;
          })
        );
        setFlippedCards([]);
        setDisableAll(false);
      }, 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (card: CardType) => {
    if (disableAll) return;
    if (card.isFlipped || card.isMatched) return;

    // Flip the card
    setCards((prevCards) =>
      prevCards.map((c) =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      )
    );
    setFlippedCards((prev) => [...prev, { ...card, isFlipped: true }]);
  };

  const resetGame = () => {
    setCards(initializeDeck());
    setFlippedCards([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Memory Game</h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={() => handleCardClick(card)} />
        ))}
      </div>
      {/* You can replace this button with a shadcn‑styled Button component if available */}
      <button
        onClick={resetGame}
        className="mt-8 px-6 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        Reset Game
      </button>
    </div>
  );
};

export default App;