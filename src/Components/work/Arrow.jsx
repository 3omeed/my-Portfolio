import React from "react";
import "./work.css";

const Arrow = ({ className, style, onClick, direction }) => (
  <button
    className={`slick-arrow-btn ${direction}`}
    style={{ ...style }}
    onClick={onClick}
    aria-label={direction === "next" ? "Next slide" : "Previous slide"}
  >
    {direction === "next" ? "›" : "‹"}
  </button>
);

export default Arrow;
