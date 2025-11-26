import React, { useContext } from "react";
import { Product_Context } from "../../Components/ContextApi/ContextApi";
import Card from "../../Components/Cart/Card";

export default function Product() {
  const { Products_Data } = useContext(Product_Context);
  // console.log(Products_Data.slice(1,5));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 py-4 mx-auto  ">
      {Products_Data.map((product, i) => (
        <Card product={product} i={i} />
      ))}
    </div>
  );
}
