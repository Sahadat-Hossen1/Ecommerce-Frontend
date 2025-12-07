import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Product_Context } from "../ContextApi/ContextApi";
import ShopingCart from "./ShopingCart";
export default function ShopingCartSideBar({ isCart, toggleCart }) {
  const { All_addToCart_p } = useContext(Product_Context);
  // console.log(All_addToCart_p.price);
  //total is for showing total prices
  const total = All_addToCart_p.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);

  //handle checkout for perses all product  and send info in addmine dasboard and backend
  const handleCheckOut=()=>{
    //send all added product list and data to addmine
    //ematy all_addtocart_p 

    //redirect to all product page 
  }

  return (
    <div className="  w-full h-screen bg-amber-100 shadow-sm z-50">
      {/* close cart sidebar */}
      <div className="  flex justify-end ">
        <MdClose className="w-6 h-6" onClick={toggleCart} />
      </div>
      {/* cart items length */}
      <div className="text-red-300 text-center pb-2 pt-3 flex justify-between px-2  border-b whitespace-nowrap ">
        <span className="text-black font-bold uppercase ">
          {All_addToCart_p.length} items
        </span>
        <span className="text-black font-bold uppercase ">view cart</span>
      </div>
      {/* show all added cart */}
    {
      All_addToCart_p.length >=1 ?<div className="flex flex-col gap-2 py-2 px-2 rounded-md">
        {All_addToCart_p.map((item, i) => (
      <ShopingCart item={item} i={i}/>
        ))}
      </div>:<hi>Please add to cart</hi>
    }
      
      {/* checkout button and total price */}
      <div className="flex flex-col border-t ">
        <label className=" px-3 py-2 text-2xl text-amber-800">
          Total:{total}{" "}
        </label>
        <button className="bg-gray-500 w-1/2 mx-auto py-2 text-xl uppercase rounded-3xl hover:bg-gray-400 hover:text-gray-600 ">
          checkout{" "}
        </button>
      </div>
    </div>
  );
}
