import React, { useState } from "react";
import { MdClose, MdFilterList } from "react-icons/md";
import Filter_by_category from "./Filter_by_category";
import Filter_by_Brand from "./Filter_by_Brand";
import Filter_by_color from "./Filter_by_color";

export default function Filter({ handle_filter_togol }) {
  return (
    // <div className="  w-1/2 md:w-full   shadow-sm -mt-3.5">
     <div
      className="w-64 px-2 bg-amber-100 shadow-2xl"
     > 
      <div className="  flex justify-end ">
        <MdClose className="w-6 h-6" onClick={handle_filter_togol} />
      </div>
      <div className="h-full  ">
        <Filter_by_category />
        <Filter_by_Brand/>
        <Filter_by_color/>
      </div>
    </div>
  );
}
