import React, { useState } from "react";
import "./styles.css";

const travelDictionary = {
  "๐ฃ": "Person Rowing Boat",
  "๐๏ธ": "Snow Caped Mountain",
  "๐": "Volcano",
  "๐ป": "mont fuji",
  "๐๏ธ": "camping",
  "๐๏ธ": "desart",
  "๐๏ธ": "national park"
};

var emojiWeKnow = Object.keys(travelDictionary);

export default function App() {
  const [meaning, setUserInput] = useState("");

  function travelInputHandler(event) {
    var userInput = event.target.value;

    var meaning = travelDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry๐ we dont have in database";
    }

    setUserInput(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = travelDictionary[emoji];
    setUserInput(meaning);
  }
  return (
    <div className="App">
      <h1>
        <b>Travel Guesser๐ง </b>
      </h1>

      <input
        onChange={travelInputHandler}
        placeholder="Put Your Emoji Here"
      ></input>
      <div>
        <h2>{meaning}</h2>
      </div>

      <h3>emoji we know</h3>

      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
