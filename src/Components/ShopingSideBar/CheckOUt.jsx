import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Product_Context } from "../ContextApi/ContextApi";

export default function CheckOUt({total,toggleCart}) {
    const navigate=useNavigate()
    const {All_addToCart_p,setAll_addToCart_p}=useContext(Product_Context);
  //handle checkout for perses all product  and send info in addmine dasboard and backend
  const handleCheckOut=()=>{
    //send all added product list and data to addmine
    //ematy all_addtocart_p and befor ematy it it will show a loading in ui 
      setAll_addToCart_p([])
      //close sidebar
      toggleCart()
    //rediect to all product page 
    navigate("/allproduct")
  }
  return (
    <div className="flex flex-col border-t ">
      <label className=" px-3 py-2 text-2xl text-amber-800">
        Total:{total}{" "}
      </label>
      <button onClick={handleCheckOut} className="bg-gray-500 w-1/2 mx-auto py-2 text-xl uppercase rounded-3xl hover:bg-gray-400 hover:text-gray-600 ">
        checkout{" "}
      </button>
    </div>
  );
}
