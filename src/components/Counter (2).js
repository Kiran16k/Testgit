import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: "10%", backgroundColor: "blue" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div style={{ backgroundColor: "white" }}>
        <Link to="/">Click here to return back to DashBoard</Link>
      </div>
    </div>
  );
};

export default Counter;
