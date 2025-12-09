import React, { useContext } from "react";
import { Product_Context } from "../../Components/ContextApi/ContextApi";
import Card from "../../Components/Cart/Card";

export default function Product() {
  const { After_Filter_Product, Products_Data } = useContext(Product_Context);

  return (
    <>
      {After_Filter_Product.length === 0 ? (
        <div className="grid place-items-center h-screen ">
          <h1 className="text-3xl font-bold text-red-600" >Search item not founded</h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 py-4 mx-auto  ">
          {After_Filter_Product.map((product, i) => (
            <Card product={product} i={i} />
          ))}
        </div>
      )}
    </>
  );
}
