import React, { useContext } from "react";
import { Product_Context } from "./../ContextApi/ContextApi";
import "./style.css";
export default function Filter_by_category() {
  const { Unic_Category_Name, SelectedCategory, setSelectedCategory } =
    useContext(Product_Context);

  const handleCheckedSelected = (category) => {
    if (SelectedCategory.includes(category)) {
      setSelectedCategory(SelectedCategory.filter((c) => c !== category));
    } else {
      setSelectedCategory([...SelectedCategory, category]);
    }
  };

  return (
    <div>
      <h1 className="py-1 text-xl font-semibold">Category Name:</h1>
      <div className="flex flex-col">
        {Unic_Category_Name.map((category, i) => (
          <li key={i} className="flex space-x-1 ">
            <input
              type="checkbox"
              checked={SelectedCategory.includes(category)}
              onChange={() => handleCheckedSelected(category)}
              id={`item-${i}`}
            />
            <label htmlFor={`category-${i}`}>{category} </label>
          </li>
        ))}
      </div>
    </div>
  );
}
