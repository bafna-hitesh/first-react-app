import React, { useState } from "react";
import "./styles.css";

const travelDictionary = {
  "🚣": "Person Rowing Boat",
  "🏔️": "Snow Caped Mountain",
  "🌋": "Volcano",
  "🗻": "mont fuji",
  "🏕️": "camping",
  "🏜️": "desart",
  "🏞️": "national park"
};

var emojiWeKnow = Object.keys(travelDictionary);

export default function App() {
  const [meaning, setUserInput] = useState("");

  function travelInputHandler(event) {
    var userInput = event.target.value;

    var meaning = travelDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have in database!";
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
        <b>Travel Gueeser</b>
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
