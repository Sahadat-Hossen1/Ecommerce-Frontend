import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Product_Context } from "../ContextApi/ContextApi";
import ShopingCart from "./ShopingCart";
import CheckOUt from "./CheckOUt";
export default function ShopingCartSideBar({ isCart, toggleCart }) {
  const { All_addToCart_p } = useContext(Product_Context);
  // console.log(All_addToCart_p.price);
  //total is for showing total prices
  const total = All_addToCart_p.reduce((acc, item) => {
    return acc + item.totalPrice;
  }, 0);


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
      </div>:<h1 className="text-xl text-red mx-2">Please add to cart</h1>
    }
      
      {/* checkout button and total price */}
      <CheckOUt total={total} toggleCart={toggleCart} />
    </div>
  );
}
