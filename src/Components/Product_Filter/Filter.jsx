import React, { useState } from "react";
import { MdClose, MdFilterList } from "react-icons/md";
import Filter_by_category from "./Filter_by_category";
import Filter_by_Brand from "./Filter_by_Brand";

export default function Filter({ handle_filter_togol }) {
  return (
    // <div className="  w-1/2 md:w-1/3 h-screen bg-blue-300 shadow-sm -mt-3.5">
    <div
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out"
    >
      <div className="  flex justify-end ">
        <MdClose className="w-6 h-6" onClick={handle_filter_togol} />
      </div>
      <div>
        <Filter_by_Brand/>
        <Filter_by_category />
      </div>
    </div>
  );
}
