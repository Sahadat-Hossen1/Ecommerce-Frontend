import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ product, i }) {
  const navigate=useNavigate()
  const singleProducsNavigate=()=>{
    // alert()
    navigate(`/product/${product.id}`)
  }
  return (
    <div
      key={i}
      onClick={singleProducsNavigate}
      className="bg-white shadow-2xl flex flex-col rounded-2xl w-full md:w-80" 
    >
      <div className="w-full h-52 flex-1">
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mx-2">
        <div>
          <h1 className="text-2xl md:text-3xl">{product.model}</h1>
          <h2 className="text-xl">Price: {product.price}</h2>
          <h3 className="text-lg">
            Brand_Name: <span className="uppercase">{product.brand}</span>
          </h3>
        </div>

        <div className="flex justify-end py-3">
          {/* <button  className="bg-gray-200 px-5 py-2 rounded-2xl text-lg hover:bg-gray-400"
          onClick={singleProducsNavigate}>
            Details
          </button> */}
          <button className="bg-gray-300 px-5 py-2 rounded-2xl text-lg hover:bg-gray-400"
          onClick={singleProducsNavigate}
         >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
