import React from "react";

export type CardType = {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type CardProps = {
  card: CardType;
  onClick: () => void;
};

export const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-20 h-20 flex items-center justify-center border-2 border-gray-300 rounded cursor-pointer select-none text-3xl transition-all
        ${
          card.isFlipped || card.isMatched
            ? "bg-white shadow-md"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
    >
      {card.isFlipped || card.isMatched ? card.emoji : ""}
    </div>
  );
};