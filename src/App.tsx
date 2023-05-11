import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import cardData from "./cardsData";

function App() {
  const [cards, setCards] = useState(cardData);

  // This function shuffles the cards and selects 9 of them.
  // It checks if at least one of the selected cards has inMemory property set to false.
  // If yes, it returns the shuffled cards.
  // If not, it shuffles again and repeats the process until a card with inMemory: false is found.

  const getRandomCards = () => {
    const shuffled = cards.sort(() => 0.5 - Math.random()).slice(0, 9);
    return shuffled.some((card) => !card.inMemory)
      ? shuffled
      : getRandomCards();
  };

  const shuffledCards = getRandomCards();

  return (
    <div className="app-container">
      <div className="txt-container">
        {" "}
        <h1>Memory game</h1>
        <h2>
          Streak: 0 <br /> Record: 5
        </h2>
      </div>

      <Cards shuffledCards={shuffledCards} />
    </div>
  );
}

export default App;
