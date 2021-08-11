import React, { useState } from "react";
import { generateInitialState } from "./helperFunctions";
import "./NumberChart.css";

function NumberChart() {
  const [size, setSize] = useState(20);
  const initialState = generateInitialState(size);
  const [squareColors, setSquareColors] = useState(initialState);
  const [color, setColor] = useState("white");

  const handleSquareClick = (squareNum) => {
    setSquareColors({ ...squareColors, [squareNum]: color });
  };

  const handleClearBtnClick = () => {
    setSquareColors(initialState);
    setColor("white");
  };

  const handleMultiples = (event) => {
    const updatedState = {};
    switch (event.target.value) {
      case "2":
        for (let i = 0; i <= size; i += 2) {
          updatedState[i] = "yellow";
        }
        break;
      case "5":
        for (let i = 0; i <= size; i += 5) {
          updatedState[i] = "yellow";
        }
        break;
      case "10":
        for (let i = 0; i <= size; i += 10) {
          updatedState[i] = "yellow";
        }
        break;
      default:
        console.log("ugh");
    }
    setSquareColors(updatedState);
  };

  return (
    <div className="container">
      <div className="buttons">
        <div className="multiples-buttons">
          <div>Multiples</div>
          <button className="button" value={2} onClick={handleMultiples}>
            2's
          </button>
          <button className="button" value={5} onClick={handleMultiples}>
            5's
          </button>
          <button className="button" value={10} onClick={handleMultiples}>
            10's
          </button>
        </div>
        <div className="size-buttons">
          <div>Chart Size</div>
          <button className="button" onClick={() => setSize(20)}>
            1-20
          </button>
          <button className="button" onClick={() => setSize(50)}>
            1-50
          </button>
          <button className="button" onClick={() => setSize(100)}>
            1-100
          </button>
        </div>
      </div>
      <div className="container_numberChart">
        <div className="title">Number Chart</div>
        <div className="numberChart">
          {Array.from({ length: size }, (_, i) => (
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
        <div className="chart-buttons">
          <div className="circle-buttons">
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
        </div>
      </div>
    </div>
  );
}

export default NumberChart;
