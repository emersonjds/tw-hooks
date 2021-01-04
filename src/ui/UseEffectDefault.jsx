import React, { useState, useEffect } from "react";

const UseEffectDefault = () => {
  const [valor, setValor] = useState(0);

  console.log("111");

  useEffect(() => {
    // a execucao só ocorre depois que o componente realmente é renderizado
    console.log("333");
  }, []);

  console.log("222");

  return (
    <>
      <input type="text" value={valor} />
      <button type="button" onClick={() => setValor(valor + 1)}>
        Botao
      </button>
    </>
  );
};

export default UseEffectDefault;
