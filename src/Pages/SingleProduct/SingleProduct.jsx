import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Product_Context } from "../../Components/ContextApi/ContextApi";

export default function SingleProduct() {
  const { id } = useParams();
  const { After_Filter_Proudct } = useContext(Product_Context);
  const openedProduct = After_Filter_Proudct.find(
    (product) => product.id === parseInt(id)
  );
//   console.log(openedProduct);
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
      <div className="flex flex-col bg-white shadow-2xl rounded-2xl p-6 max-w-2xl w-full">
       
        <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-xl flex justify-center items-center bg-gray-50">
          <img
            src={openedProduct.image}
            alt=""
            className="h-full object-contain"
          />
        </div>

        {/* Product Title */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{openedProduct.model}</h1>

          {/* Brand */}
          <p className="text-lg text-gray-600">
            Brand:{" "}
            <span className="uppercase font-semibold">
              {openedProduct.brand}
            </span>
          </p>

          {/* Price */}
          <p className="text-2xl text-green-600 font-bold mt-3">
            ৳ {openedProduct.price}
          </p>

          {/* Title */}
          <p className="text-xl font-semibold mt-4">{openedProduct.title}</p>

          {/* Description */}
          <p className="mt-2 text-gray-700 leading-relaxed">
            {openedProduct.description}
          </p>

          {/* Buy Button */}
          <div className="mt-6">
            <button
              className="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-semibold
                     hover:bg-green-700 transition-all duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div>
  //    <div className="p-4">
  //       <img src={openedProduct.image} className="w-80 mb-4" />
  //       <h1 className="text-3xl">{openedProduct.model}</h1>
  //       <p className="text-xl">Price: {openedProduct.price}</p>
  //       <p className="text-lg">Brand: {openedProduct.brand}</p>
  //       <p> title:{openedProduct.title} </p>
  //       <p>description:{openedProduct.description} </p>
  //       <div>
  //         <button>buy</button>
  //       </div>
  //     </div>

  //     </div>
  //   )
}
