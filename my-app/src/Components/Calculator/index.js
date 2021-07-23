import React, { useState } from "react";
import "./style.css";
const Cal = () => {
  const [input, setInput] = useState("");
  const calbtns = [];
  [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "%"].forEach((item) => {
    calbtns.push(
      <button
        className="button1"
        value={item}
        key={item}
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
      >
        {item}
      </button>
    );
  });

  return (
    <div className="main-dev">
      <div className="buttons">{input}</div>

      <div>{calbtns}</div>
      <div>
        <button
          className="buttonc"
          onClick={() => {
            setInput(input.substr(0, input.length - 1));
          }}
        >
          clear
        </button>
        <button
          className="buttonc"
          onClick={() => {
            setInput("");
          }}
        >
          CA
        </button>
        <button
          className="button"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
          value={"+"}
        >
          +
        </button>
        <button
          className="button"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
          value={"-"}
        >
          -
        </button>
        <button
          className="button"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
          value={"/"}
        >
          /
        </button>
        <button
          className="button"
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
          value={"*"}
        >
          *
        </button>
        <button
          className="button"
          onClick={(e) => {
            try {
              setInput(String(eval(input)));
            } catch {
              console.log(e);
            }
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Cal;
