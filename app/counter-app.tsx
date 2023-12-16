"use client";
import React, { useState } from "react";
export default function CounterApp() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>counter-app</div>
      <button
        onClick={increment}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Increment
      </button>
      {counter}
      <button
        onClick={decrement}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Decrement
      </button>
    </>
  );
}
