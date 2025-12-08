import React, { useContext, useState } from "react";
import { Product_Context } from "./../ContextApi/ContextApi";
import "./style.css";
export default function Filter_by_Color() {
  const { Unic_Color_Name, SelectedColor, setSelectedColor } =
    useContext(Product_Context);
    
    const [toggleMore, setToggleMore] = useState(false);
    const slice_Color_name = toggleMore
    ? Unic_Color_Name
    : Unic_Color_Name.slice(1, 6);
    
    // console.log(slice_Color_name.length);
  const handleCheckedSelected = (Color) => {
    if (SelectedColor.includes(Color)) {
      setSelectedColor(SelectedColor.filter((c) => c !== Color));
    } else {
      setSelectedColor([...SelectedColor, Color]);
    }
  };

  return (
    <div>
      <h1 className="py-1 text-2xl font-semibold">Color Name:</h1>
      <div className="flex flex-col">
        {slice_Color_name.map((Color, i) => (
          <li key={i} className="flex space-x-1 ">
            <input
              type="checkbox"
              checked={SelectedColor.includes(Color)}
              onChange={() => handleCheckedSelected(Color)}
              id={`item-${i}`}
            />
            <label className="text-xl" htmlFor={`Color-${i}`}>{Color} </label>
          </li>
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
