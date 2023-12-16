import React from "react";
import StrPrac from "./str-prac";
import CounterApp from "./counter-app";
import CounterAppAdvance from "./counter-app-advance";
import Todo from "./todo";

export default function Home() {
  return (
    <>
      <StrPrac />
      <CounterApp />
      <CounterAppAdvance />
      <Todo />
    </>
  );
}
