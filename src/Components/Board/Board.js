import React from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  return (
    <div id="mainContent" className="boardrow">
      {squares.map((step, i) => (
        <div>
          <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
        </div>
      ))}
    </div>
  );
};

export default Board;
