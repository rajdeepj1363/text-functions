import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Type string");

  function handleChange(event) {
    console.log("Changes detected");
    setText(event.target.value);
  }
  function convertToUpr() {
    const newText = text.toUpperCase();
    setText(newText);
  }
  function convertToLow() {
    const newText = text.toLowerCase();
    setText(newText);
  }
  function removeExtraSpaces() {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const textArea = {
    width: "70vw",
    height: "30vh",
  };


  return (
    <div className="container">
      <textarea
        id=""
        className="my-2"
        name=""
        value={text}
        onChange={handleChange}
        style={textArea}
      />
      <br />

      <div className="rows">

        <div className="col-3 col-sm-12 my-2">
          <button className="btn btn-primary me-2" onClick={convertToUpr}>
            Convert to Uppercase
          </button>
        </div>

        <div className="col-3 col-sm-12 my-2">
          <button className="btn btn-primary me-2" onClick={convertToLow}>
            Convert to Lowercase
          </button>
        </div>

        <div className="col-3 col-sm-12 my-2">
          <button className="btn btn-primary me-2" onClick={removeExtraSpaces}>
            Remove Extraspaces
          </button>
        </div>

        <div className="col-3 col-sm-12 my-2">
          <button
            className="btn btn-primary me-2"
            onClick={() => {
              setText("");
            }}
          >
            Clear Textarea
          </button>
        </div>
      </div>

      <div className="container my-4">
        <b>Text Summary</b>
        <p>
          Number of words typed: {text.split(" ").length} and characters:{" "}
          {text.length}
        </p>
        <p>
          {(0.008 * (text.split(" ").length - 1)).toPrecision(3)} minutes read
        </p>
      </div>
    </div>
  );
}
