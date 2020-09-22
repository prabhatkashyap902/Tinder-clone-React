import React, { useState, useEffect } from "react";
import "../Css/TinderCard.css";
import TinderCard from "react-tinder-card";
import Axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await Axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

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
              style={{ backgroundImage: `url(${person.imgUrl})` }}
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
