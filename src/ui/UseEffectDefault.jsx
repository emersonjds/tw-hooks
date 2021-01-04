import React, { useState, useEffect } from "react";

const UseEffectDefault = () => {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  //   useEffect(() => {
  //     setCounter((counter) => counter + 1);
  //   }, [title]);

  useEffect(() => {
    setInterval(() => {
      console.log("111");
      setCounter((counter) => counter + 1);
    }, 2000);
  }, []);

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" onClick={() => setCounter(counter + 1)}>
        {" "}
        Botao
      </button>
      {counter}
    </>
  );
};

export default UseEffectDefault;
