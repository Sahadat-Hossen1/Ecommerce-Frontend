import React, { useState } from "react";
import { MdClose, MdFilterList } from "react-icons/md";
import Filter_by_category from "./Filter_by_category";
import Filter_by_Brand from "./Filter_by_Brand";
import Filter_by_color from "./Filter_by_color";
import Filter_by_Price from "./Filter_by_Price";

export default function Filter({ handle_filter_togol }) {
  
  return (
     <div
      className="w-82  pl-4 overflow-y-auto sticky top-0 left-0"
     > 
      <div className="  flex justify-end ">
        <MdClose className="w-6 h-6" onClick={handle_filter_togol} />
      </div>
      <div className="">
        <Filter_by_Price/>
        <Filter_by_category />
        <Filter_by_Brand/>
        <Filter_by_color/>
      </div>
    </div>
  );
}
