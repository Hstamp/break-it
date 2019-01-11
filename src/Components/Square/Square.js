import React from "react";
import ReactDOM from "react-dom";
import "./Square.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
