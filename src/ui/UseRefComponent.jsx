import React, { useState, useEffect, useRef, createRef } from "react";

const UseRefComponent = () => {
  const [counter, setCounter] = useState(0);
  const defaultRef = createRef();
  const hookRef = useRef();
  const counterRef = useRef(0);

  //   useEffect(() => {
  //     console.log("useRefDefault", defaultRef);
  //     console.log("hookRef", hookRef);
  //   }, []);

  useEffect(() => {
    counterRef.current = counter;
    console.log(counterRef);
  }, [counter]);

  //   console.log("useRefDefault", defaultRef);
  //   console.log("hookRef", hookRef);

  return (
    <>
      {/* <div ref={defaultRef}></div>
      <div ref={hookRef}></div> */}
      {/* {counter} */}
      <button onClick={() => setCounter(counter + 1)}>Botao</button>
    </>
  );
};

export default UseRefComponent;
