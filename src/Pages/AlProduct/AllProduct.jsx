import React, { useState } from "react";
import Filter from "../../Components/Product_Filter/Filter";
import Product from "./Product";
import { MdFilterList } from "react-icons/md";
import "./Style.css";

export default function AllProduct() {
  const [isOpen, setisOpen] = useState(false);
  const handle_filter_togol = () => {
    setisOpen(!isOpen);
    // alert()
  };
  return (
    <div className="flex flex-col ">
      <div className="flex-1">
        <div className="w-full  bg-white shadow-2xl pl-2 mb-4">
          <button
            className="bg-gray-200 px-3 py-2 rounded-xl flex space-x-0.5 hover:scale-x-105 "
            onClick={handle_filter_togol}
          >
            {" "}
            <span>Filter</span>
            <MdFilterList className="w-6 h-6" />{" "}
          </button>
        </div>
        {/* {isOpen && <Filter handle_filter_togol={handle_filter_togol} />} */}
        {isOpen && (
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-white shadow-2xl 
                transform  transition-all duration-1000 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Filter handle_filter_togol={handle_filter_togol} />
          </div>
        )}

        {/* <Filter /> */}
      </div>
      <Product />
    </div>
  );
}
