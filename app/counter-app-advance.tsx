"use client";
import React, { useState } from "react";
export default function CounterAppAdvance() {
  const [counter, setCounter] = useState(0);
  const increment = (kitna = 1) => {
    setCounter(counter + kitna);
  };
  const decrement = (kitna = 1) => {
    setCounter(counter - kitna);
  };
  return (
    <>
      <div>counter app advance</div>
      <button
        onClick={() => increment(1)}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Increment 1
      </button>
      <button
        onClick={() => increment(2)}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Increment 2
      </button>
      <button
        onClick={() => increment(3)}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Increment 3
      </button>
      {counter}
      <button
        onClick={() => decrement(3)}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Decrement 3
      </button>
      <button
        onClick={() => decrement(2)}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Decrement 2
      </button>
      <button
        onClick={() => decrement(1)}
        className="border-2 py-1 px-2 border-cyan-950"
      >
        Decrement 1
      </button>
    </>
  );
}
