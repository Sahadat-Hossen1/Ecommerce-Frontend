import React, { useContext, useEffect, useState } from "react";
import { Product_Context } from "../../Components/ContextApi/ContextApi";

export default  function HomeBanner() {
  const { After_Filter_Product } = useContext(Product_Context);

  const [img, setimg] = useState("");
  useEffect(() => {
     const banerImg = After_Filter_Product[3];
     if(banerImg){
      setimg(banerImg.image)
     }

  }, [After_Filter_Product]);

  return (
    <div
      className={` w-full h-[350px] bg-contain bg-left bg-no-repeat`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div>
        
      </div>
      {/* <img className="w-full h-96" src={`${img}`} alt="" /> */}
    </div>
  );
}
