import React, { useContext, useEffect, useState } from "react";
import { Product_Context } from "../../Components/ContextApi/ContextApi";

export default function HomeBanner() {
  const { After_Filter_Product } = useContext(Product_Context);

  const [img, setimg] = useState("");
  useEffect(() => {
    const banerImg = After_Filter_Product[3];
    if (banerImg) {
      setimg(banerImg.image);
    }
  }, [After_Filter_Product]);

  return (
    <div
      className={` w-[90%] h-[350px] mb-3 mx-auto bg-contain bg-right bg-no-repeat shadow-2xl`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="-rotate-12 mx-20">
        <h1 className="font-black text-4xl  ">
          ELECTRONIC DEALS <br /> <span className=" leading-normal">30% OFF</span> 
        </h1>
        <button className=" px-3 py-2 mt-4 text-xl font-bold rounded-2xl bg-gray-500 hover:bg-gray-400 "> Get yours</button>
      </div>
    </div>
  );
}
