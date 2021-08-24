import React from "react";
import "./App.css";
import NumberChart from "./NumberChart";

function App() {
  return (
    <>
      <div className="app">
        <NumberChart />
      </div>
      <div className="information">
        <p>
          Number charts help teach counting, skip counting, addition,
          subtraction, and multiplication. They provide a visual guide for early
          learners to see how numbers are arranged and organized. A number chart
          similar to this one can be found:{" "}
          <a
            href="https://toytheater.com/hundreds-chart/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <strong>Instructions:</strong> Color this interactive number chart to
        illustrate counting or skipping patterns and show multiples. Use white
        or the 'clear' button to erase errors.
      </div>
      <footer>
        Note: this number chart is not optimized for mobile or tablet use.
      </footer>
    </>
  );
}

export default App;
