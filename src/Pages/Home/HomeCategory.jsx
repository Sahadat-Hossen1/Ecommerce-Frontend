import React, { useContext, useEffect, useState } from "react";

import Card from "../../Components/Cart/Card";
// import images from "public/Headphone.jpg"
import { Product_Context } from './../../Components/ContextApi/ContextApi';

export default function HomeCategory() {
  const { Unic_Category_Name, Products_Data } = useContext(Product_Context);

  // for audio category
  let Audio = Products_Data.filter((product) =>
    product.category.includes("audio")
  ).slice(1, 7);
  // for gaming category

  let Gaming = Products_Data.filter((product) =>
    product.category.includes("gaming")
  ).slice(1, 7);
  // for mobile category

  let Mobile = Products_Data.filter((product) =>
    product.category.includes("mobile")
  ).slice(1, 7);
  // for tv category
  let Tv = Products_Data.filter((product) =>
    product.category.includes("tv")
  ).slice(1, 4);

  return (
    <div className="bg-[#F4F4F4] ">
      <h1 className="py-4  text-center text-2xl font-bold font-serif">
        Select A Categroy
      </h1>
      <div className="mx-4 md:mx-20 rounded-2xl flex gap-2 items-center justify-center  py-2 bg-amber-200  text-2xl ">
        {Unic_Category_Name.map((category, i) => (
          <ul key={i} className="">
            <li
              className=" px-4 py-3 hover:bg-gray-200 rounded-2xl font-semibold uppercase font-serif cursor-pointer "
              onClick={() => handleCategory(category)}
            >
              {/* how to redirect to  show some cart option*/}
              {category}{" "}
            </li>
          </ul>
        ))}
      </div>
      {/* for show some cart by category filter */}
      <div>
        {/*for filtering by audio  */}
        <div>
          <h2 className="pl-2 upercase text-2xl xl:3xl font-serif font-semibold">
            Audio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 py-4 mx-auto  ">
            {Audio.map((product, i) => (
              <Card product={product} i={i} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 py-4">
            {Mobile.map((product, i) => (
              <Card product={product} i={i}></Card>
            ))}
          </div>
        </div>
        {/*for filtering by  gaming   */}{" "}
        <div>
          <h3 className=" pl-2 uppercase text-2xl xl:3xl font-serif font-semibold">
            gaming
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 py-4">
            {Gaming.map((product, i) => (
              <Card product={product} i={i} />
            ))}
          </div>
        </div>
        {/*for filtering by mobile  */}{" "}
        <div>
          <h4 className="pl-2 upercase text-2xl xl:3xl font-serif font-semibold">
            mobile
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 py-4">
            {Mobile.map((product, i) => (
              <Card product={product} i={i} />
            ))}
          </div>
        </div>
        {/*for filtering by tv  */}{" "}
        <div>
          <h5 className="pl-2 upercase text-2xl xl:3xl font-serif font-semibold">
            {" "}
            tv
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 py-4">
            {Tv.map((product, i) => (
              <Card product={product} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
