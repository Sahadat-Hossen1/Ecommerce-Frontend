import React, { useContext } from "react";
import { Product_Context } from "./../ContextApi/ContextApi";
import "./style.css";
export default function Filter_by_Brand() {
  const { Unic_Brand_Name, SelectedBrand, setSelectedBrand } =
    useContext(Product_Context);

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
        {Unic_Brand_Name.map((Brand, i) => (
          <li key={i} className="flex space-x-1 ">
            <input
              type="checkbox"
              checked={SelectedBrand.includes(Brand)}
              onChange={() => handleCheckedSelected(Brand)}
              id={`item-${i}`}
            />
            <label htmlFor={`Brand-${i}`}>{Brand} </label>
          </li>
        ))}
      </div>
    </div>
  );
}
