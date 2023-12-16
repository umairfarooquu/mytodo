"use client";
import { log } from "console";
import { useState } from "react";
import { text } from "stream/consumers";

export default function StrPrac() {
  const [myValue, setVal] = useState("");
  const onChangeHandler = (e: any) => {
    console.log("e is ", e.target.value);

    setVal(e.target.value);
  };
  const [myValue1, setVal1] = useState("");
  const onChangeHandler1 = (f: any) => {
    console.log("f is ", f.target.value);

    setVal1(f.target.value);
  };

  return (
    <>
      <input
        type={"text"}
        value={myValue}
        placeholder="1st Value"
        onChange={onChangeHandler}
        className="border-2"
      />
      <br />
      <br />
      <input
        type={"text"}
        value={myValue1}
        placeholder="2nd Value"
        onChange={onChangeHandler1}
        className="border-2"
      />
      <br />
      <br />
      Length of 1st is:{myValue.length}
      <br />
      <br />
      Length of 2nd is:{myValue1.length}
    </>
  );
}
