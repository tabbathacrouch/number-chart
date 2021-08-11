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
        Color this interactive number chart to illustrate multiples and
        patterns. Use white to erase errors. Number charts help teach counting,
        skip counting, addition, subtraction, and multiplication. They provide a
        visual guide for early learners to see how numbers are arranged and
        organized. An interactive number chart similar to the one found:{" "}
        <a
          href="https://toytheater.com/hundreds-chart/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </div>
    </>
  );
}

export default App;
