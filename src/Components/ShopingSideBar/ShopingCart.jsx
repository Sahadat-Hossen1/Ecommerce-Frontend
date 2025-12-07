import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { Product_Context } from "../ContextApi/ContextApi";

export default function ShopingCart({ item, i }) {
  const { All_addToCart_p, setAll_addToCart_p } = useContext(Product_Context);
  //for remove items from shopingCartSideBar
  // console.log(All_addToCart_p)
  const handleRemoveCart = (id) => {
    const removeItem=All_addToCart_p.filter((item)=>item.id !== id);
    setAll_addToCart_p(removeItem)
    // console.log(removeItem);
    
  };
  return (
    <div key={i} className="flex flex-col bg-white shadow ">
      <div className="flex justify-end">
        <MdClose
          onClick={() => handleRemoveCart(item.id)}
          className="w-6 h-6 "
        />
      </div>

      <div className=" flex px-2">
        <div className="w-2/3 flex flex-col  text-left">
          <p className="text-xl py-1 ">
            {" "}
            Price: {item?.quantity}* {item.price} = {item.totalPrice}{" "}
          </p>
          <h2 className="text-xl py-1">Model: {item.model} </h2>
        </div>
        <img src={item.image} alt="cartphot" className="w-1/3" />
      </div>
    </div>
  );
}
