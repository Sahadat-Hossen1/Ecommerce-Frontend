import React, { useContext, useState } from "react";
import { Product_Context } from "./../ContextApi/ContextApi";
import "./style.css";
export default function Filter_by_Brand() {
  const { Unic_Brand_Name, SelectedBrand, setSelectedBrand } =
    useContext(Product_Context);
  const [toggleMore, setToggleMore] = useState(false);
  const slice_brand_name = toggleMore
    ? Unic_Brand_Name
    : Unic_Brand_Name.slice(1, 6);
  // console.log(slice_brand_name.length);

  const handleCheckedSelected = (Brand) => {
    if (SelectedBrand.includes(Brand)) {
      setSelectedBrand(SelectedBrand.filter((b) => b !== Brand));
    } else {
      setSelectedBrand([...SelectedBrand, Brand]);
    }
  };

  return (
    <div>
      <h1 className="py-1 text-xl font-semibold">Brand Name:</h1>
      <div className="flex flex-col">
        {slice_brand_name.map((Brand, i) => (
          <form key={i} className="flex space-x-1 ">
            <input
              type="checkbox"
              checked={SelectedBrand.includes(Brand)}
              onChange={() => handleCheckedSelected(Brand)}
              id={`item-${i}`}
            />
            <label htmlFor={`Brand-${i}`} >{Brand} </label>
          </form>
        ))}
      </div>
      <div className="flex justify-end px-4">
        {toggleMore ? (
          <button
            className="bg-amber-300 px-3 py-2 rounded-2xl font-bold text-lg hover:bg-amber-200 "
            onClick={() => setToggleMore(!toggleMore)}
          >
            Less
          </button>
        ) : (
          <button
            className="bg-amber-300 px-3 py-2 rounded-2xl font-bold text-lg hover:bg-amber-200 "
            onClick={() => setToggleMore(!toggleMore)}
          >
            More
          </button>
        )}
      </div>
    </div>
  );
}
