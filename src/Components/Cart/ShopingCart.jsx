import React from "react";
import { MdClose } from "react-icons/md";
export default function ShopingCart({isCart,toggleCart}) {
  const cartItems = [
    {
      productName: "headphone",
      price: 120,
      quantity: 4,
      size: "m",
      color: "red",
      photo: "../../assets/Main-Logo.jpg",
    },
    {
      productName: "headphone1",
      price: 120,
      quantity: 4,
      size: "m",
      color: "red",
      photo: "../../assets/Main-Logo.jpg",
    },
    {
      productName: "headphone2",
      price: 120,
      quantity: 4,
      size: "m",
      color: "red",
      photo: "../../assets/Main-Logo.jpg",
    },
    {
      productName: "headphone3",
      price: 120,
      quantity: 4,
      size: "m",
      color: "red",
      photo: "../../assets/Main-Logo.jpg",
    },
  ];
  return (
    <div className="  w-full h-screen bg-amber-100 shadow-sm">
     <div className="  flex justify-end ">
        <MdClose className="w-6 h-6" onClick={toggleCart}/>
        </div>
      <h1 className="text-red-300 text-2xl text-center py-4">Your Cart</h1>
      <div className="flex flex-col gap-2 px-2 rounded-md">
        {cartItems.map((cart) => (
          <div key={cart.productName}
          className="bg-white flex ">
            {/* <img src={cart.photo}  alt="cartphot" className="w-1/3" /> */}
            <div className="w-2/3">

            <h2> {cart.productName} </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
