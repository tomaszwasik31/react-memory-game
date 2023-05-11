import React from "react";

export default function Cards(props) {
  const cardElement = props.shuffledCards.map((card) => (
    <div className="card" key={card.id} id={card.id}>
      <img className="card-img" src={card.img}  />
      <p className="card-name">  {card.name} </p>
    </div>
  ));

  return <div className="cards-container">{cardElement}</div>;
}
