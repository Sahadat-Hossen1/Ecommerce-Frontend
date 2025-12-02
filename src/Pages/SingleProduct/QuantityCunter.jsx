import React from "react";

export default function QuantityCunter({Counter,setCounter}) {
  const increseCounter = () => {
    if(Counter == 1) return
    if(Counter >1){

        setCounter(Counter -1)
    }
    
  };
  const dicresCounter = () => {
    setCounter(Counter +1)
  };
  return (
    <div className="flex  text-4xl">
      {" "}
      <button className="border px-3 hover:opacity-80" onClick={increseCounter}>-</button>
      <span className="border px-3">{Counter} </span>
      <button className="border px-3 hover:opacity-80" onClick={dicresCounter}>+</button>
    </div>
  );
}
