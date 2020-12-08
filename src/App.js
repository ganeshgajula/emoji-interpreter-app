import React, { useState } from "react";
import "./styles.css";

let emojiDictionary = {
  "😀": "Grinning Face",
  "😋": "Savoring Food",
  "😊": "Smiling",
  "😑": "Expressionless",
  "😎": "Cool face",
  "😒": "Unamused",
  "😪": "Sleepy",
  "😐": "Neutral",
  "😅": "Sweaty Face",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "😍": "Smiling Face with Heart-Eyes",
  "😛": "Face with Tongue",
  "😔": "Pensive Face",
  "😷": "Face with Medical Mask",
  "😕": "Confused Face",
  "😮": "Face with Open Mouth",
  "😢": "Crying Face",
  "😱": "Face Screaming in Fear",
  "😠": "Angry Face",
  "😩": "Weary Face",
  "😞": "Disappointed Face",
  "😖": "Confounded Face",
  "😭": "Loudly Crying Face",
  "😨": "Fearful Face",
  "😧": "Anguished Face",
  "😫": "Tired Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    let inputText = event.target.value;
    let meaning = emojiDictionary[inputText];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "Sorry! Entered emoji is not in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "4rem" }}> Emoji Interpreter</h1>
      <input
        placeholder="Enter an Emoji to know its meaning"
        style={{ padding: "0.6rem", width: "70%" }}
        onChange={inputChangeHandler}
      />
      {/* <h2>{inputValue}</h2> */}
      <h2>{meaning}</h2>
      <div className="emojiContent">
        <h3 className="msgText">
          Click on any emoji below to know its meaning
        </h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2.5rem",
                padding: "0.5rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer style={{ padding: "2.5rem" }}>
        <div>Made with 💛 by Ganesh Gajula</div>
      </footer>
    </div>
  );
}
