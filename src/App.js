import React from "react";

import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState("");

  const handleIncrementClick = () => {
    if (error !== "") {
      setError("");
    }
    setCount((count) => count + 1);
  };

  const handleDscrementClick = () => {
    if (count === 0) {
      setError("Error");
      return;
    }
    setCount((count) => count - 1);
  };

  return (
    <div data-test="component-app">
      {error !== "" && <h1 data-test="error-message">Error</h1>}
      <h1 data-test="counter-display">
        Counter: <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={handleIncrementClick}>
        Increment
      </button>
      <button data-test="decrement-button" onClick={handleDscrementClick}>
        Decrement
      </button>
    </div>
  );
}

export default App;
