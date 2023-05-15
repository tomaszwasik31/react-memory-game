import React from "react";
import "./App.css";
import Card from "./components/Card";
import cardData from "./cardsData";

function App() {
  const [cards, setCards] = React.useState(cardData);
  const [streak, setStreak] = React.useState(0);

  const getRandomCards = () => {
    // Shuffle the cards array randomly and select the first 9 cards.
    const shuffled = cards.sort(() => 0.5 - Math.random()).slice(0, 9);

    // Check if at least one of the selected cards has inMemory property set to false.
    const hasMemoryCard = shuffled.some((card) => !card.inMemory);
    if (hasMemoryCard) {
      // If there is at least one card with inMemory: false, return the shuffled cards.
      return shuffled;
    } else {
      // If none of the cards have inMemory: false, shuffle again and try again.
      return getRandomCards();
    }
  };
  const [shuffledCards, setShuffledCards] = React.useState(getRandomCards());

  const cardClick = (id) => {
    console.log(cards);

    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id && card.inMemory === false) {
          console.log("change");
          return { ...card, inMemory: true };
        } else if (card.id === id && card.inMemory === true) {
          console.log("game over");
          return resetGame();
        } else {
          return card;
        }
      })
    );
    setStreak((prevStreak) => prevStreak + 1);
    setShuffledCards(getRandomCards());
  };

  function resetGame() {
    // reset the game by setting all cards' inMemory to false and shuffling the cards
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, inMemory: false }))
    );
    setStreak(0);
  }

  const cardsElements = shuffledCards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      img={card.img}
      name={card.name}
      handleClick={() => cardClick(card.id)}
    />
  ));

  return (
    <div className="app-container">
      <div className="txt-container">
        <h1>Memory game</h1>
        <h2>
          Streak: {streak} <br /> Record: 5
        </h2>
      </div>
      <div className="cards-container">{cardsElements}</div>
    </div>
  );
}

export default App;
