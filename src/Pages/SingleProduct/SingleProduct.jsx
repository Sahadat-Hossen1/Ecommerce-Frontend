import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Product_Context } from "../../Components/ContextApi/ContextApi";
import QuantityCunter from "./QuantityCunter";

export default function SingleProduct() {
  const { id } = useParams();
      const[Counter,setCounter]=useState(1)

  const { After_Filter_Product } = useContext(Product_Context);
  let openedProduct = After_Filter_Product.find(
    (product) => product.id === parseInt(id)
  );
 const totalPrice=openedProduct?.price*Counter;
  if (!openedProduct) {
    return <h1>Product not found </h1>;
  }
  return (
    <div className="min-h-auto w-full bg-gray-100 px-4 py-10 flex justify-center">
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl p-6 gap-4">
        {/* img & contens */}
        <div className="flex flex-row ">
          <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-xl flex justify-center items-center bg-gray-50">
            <img
              src={openedProduct?.image}
              alt=""
              className="h-full object-contain"
            />
          </div>
          {/* contents */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{openedProduct.model}</h1>

            <p className="text-lg text-gray-600">
              Brand:{" "}
              <span className="uppercase font-semibold">
                {openedProduct.brand}
              </span>
            </p>

            <p className="text-2xl text-green-600 font-bold mt-3">
              ৳ {openedProduct.price}
            </p>

            <p className="text-xl font-semibold mt-4">{openedProduct.title}</p>
            {/* cunter */}

            {/* Buy Button */}
            <div className="mt-6 flex-col space-y-4">
             {/* quantity Counter & total price */}
             <div className="flex flex-row items-center justify-center gap-2">

             <QuantityCunter Counter={Counter} setCounter={setCounter} />
             <h6 className="text-xl md:text-3xl font-semibold">Total Price:{totalPrice} </h6>
             </div>
              <button
                className="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-semibold
                     hover:bg-green-700 transition-all duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* description and reviews */}
        <div className="border-t flex items-center justify-center">
          <ul className="flex space-x-4 py-1">
            <li className="hover:border-b ">Description</li>
            <li className="hover:border-b"> Reviews</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
