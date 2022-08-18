import React, { useState } from "react";
import Navbar from "../components/Navbar";

const welcome = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <h3>Counter: {count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default welcome;
