import React, { useState } from "react";
import "./NumberChart.css";

function NumberChart() {
  const [color, setColor] = useState("white");
  const initialState = {
    1: "white",
    2: "white",
    3: "white",
    4: "white",
    5: "white",
    6: "white",
    7: "white",
    8: "white",
    9: "white",
    10: "white",
    11: "white",
    12: "white",
    13: "white",
    14: "white",
    15: "white",
    16: "white",
    17: "white",
    18: "white",
    19: "white",
    20: "white",
  };
  const [squareColors, setSquareColors] = useState(initialState);

  const handleSquareClick = (squareNum) => {
    setSquareColors({ ...squareColors, [squareNum]: color });
  };
  const handleClearBtnClick = () => {
    setSquareColors(initialState);
    setColor("white");
  };

  return (
    <div className="container_numberChart">
      <div className="title">Number Chart</div>
      <div className="numberChart">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            className="numberSquare"
            onClick={() => handleSquareClick(i + 1)}
            key={i + 1}
            style={{ backgroundColor: squareColors[i + 1] }}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="btn color-btn white"
          id="white"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button
          className="btn color-btn lightsalmon"
          id="lightsalmon"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button
          className="btn color-btn lightskyblue"
          id="lightskyblue"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button
          className="btn color-btn lightpink"
          id="lightpink"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button
          className="btn color-btn lightgreen"
          id="lightgreen"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button
          className="btn color-btn lightcoral"
          id="lightcoral"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button
          className="btn color-btn yellow"
          id="yellow"
          onClick={(e) => setColor(e.target.id)}
        ></button>
        <button className="btn clear" onClick={handleClearBtnClick}>
          Clear
        </button>
      </div>
      <div className="information">
        An interactive number chart similar to the one found:{" "}
        <a
          href="https://www.mathplayground.com/interactive_hundreds_chart.html"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </div>
    </div>
  );
}

export default NumberChart;
