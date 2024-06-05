import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>{" "}
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p style={{ color: props.mode === "light" ? "#042743" : "white" }}>
          {text.split(/\s+/).length} words and {text.length} characters
        </p>
        <p style={{ color: props.mode === "light" ? "#042743" : "white" }}>
          {0.008 * text.split(" ").length} minutes read
        </p>
        <h3>Preview</h3>
        <p style={{ color: props.mode === "light" ? "#042743" : "white" }}>
          {text.length > 0 ? text : "Enter something to preview"}
        </p>
      </div>
    </>
  );
}
