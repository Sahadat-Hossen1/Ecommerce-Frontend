import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiAlignJustify,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

// import { FaSearch } from 'rea';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  // for toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // this for ul items
  const ulItems = (
    <>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 p-2">
        <NavLink to="/">home</NavLink>
      </li>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 p-2">
        <NavLink to="/about">about</NavLink>
      </li>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 p-2">
        <NavLink to="/allproduct">allproduct</NavLink>
      </li>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 p-2">
        <NavLink to="/contact">contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between">
      <nav className="flex items-center justify-between bg-amber-100 w-full py-3 px-2 relative">
        {/* this is for nav logo  */}
        <div className="flex items-center justify-center space-x-2">
          {
            !isOpen ?  <FiAlignJustify  className=" w-6 h-6 md:hidden " onClick={toggleMenu} />:<li onClick={toggleMenu}>x</li>
          }
        
          <h1 className="font-bold uppercase text-2xl">won shop</h1>
        </div>
        {/* this is for desktop menu */}
        <ul className="hidden md:flex space-x-4 px-3  uppercase font-semibold ">{ulItems}</ul>
        {/* this for mobile menu */}
        {
          isOpen&& (
            <div className=" absolute top-14 left-0 bg-gray-100  w-1/2 rounded-2xl ">
              
              <ul className="flex flex-col space-y-1 font-semibold  uppercase  ">{ulItems}</ul>
            </div>
          )
        }

        {/* this for nav icon */}

        <div className="flex justify-end items-center space-x-4 pr-2">
          <ul className="flex space-x-2">
            <li>
              <FiUser className="w-4 h-4  md:w-6 md:h-6" />
            </li>
            <li>
              <FiShoppingCart className="w-4 h-4  md:w-6 md:h-6" />
            </li>
            {/* for search icon */}
            <li>
              <FiSearch className="w-4 h-4   md:w-6 md:h-6" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
