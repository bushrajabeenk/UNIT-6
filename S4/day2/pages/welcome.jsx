import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function welcome({ data }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <h1>The server side data :</h1>
      <p>{data}</p>
      <h3>Counter: {count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await new Promise((res, rej) => res("Server side props"));

  return {
    props: {
      data,
    },
  };
};
