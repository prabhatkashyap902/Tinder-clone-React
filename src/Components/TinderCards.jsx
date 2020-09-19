import React, { useState } from "react";
import "../Css/TinderCard.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon",
      url:
        "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
    },
    {
      name: "lodu",
      url:
        "https://i.pinimg.com/originals/8a/f5/26/8af526b5bd338af8feb079053312defa.jpg",
    },
  ]);

  const onSwipe = (direction, name) => {
    console.log("removed: " + name);
  };

  const onCardLeftScreen = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={(dir) => onSwipe(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
