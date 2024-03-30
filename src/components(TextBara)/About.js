import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  console.log(props.mode);
  return (
    <div
      className={`container ${props.mode}`}
      onClick={props.togglemode}
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#042743",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h2>About us</h2>
      <div
        className={`accordion ${props.mode}`}
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#042743",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${props.mode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Analyze Your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse  ${props.mode}`}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "black" : "white",
            }}
            data-bs-parent="#accordionExample"
          >
            {/* Accordion 1 body */}
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <span>
                TextBara gives you a way to analyze your text quickly and
                effectively
              </span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            {/* Accordion 2 body */}
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <span>
                TextBara is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextBara reports the number of words and characters. Thus it is
                suitable for writing text with word/character limit.
              </span>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            {/* Accordion 3 body */}
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#042743",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
