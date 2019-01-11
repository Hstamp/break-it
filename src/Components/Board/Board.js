import React from "react";
import Square from "../Square/Square";

const Board = ({ squares, onClick }) => {
  return (
    <div
      id="mainContent"
      className="board-row"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "5px",
        gridAutoRows: "minMax(5px, auto)"
      }}>
      {squares.map((step, i) => (
        <div>
          <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
        </div>
      ))}
    </div>
  );
};

export default Board;
