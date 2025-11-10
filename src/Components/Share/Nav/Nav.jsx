import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiAlignJustify,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

import { MdClose } from "react-icons/md";
import SearchBar from "./SearchBar";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  // for toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // for open search box
  const [isOpenSearch, setIsOpnSearch] = useState(false);
  const toggleSearch = () => {
    // alert()
    setIsOpnSearch(!isOpenSearch);
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
          {!isOpen ? (
            <FiAlignJustify
              className=" w-6 h-6 md:hidden "
              onClick={toggleMenu}
            />
          ) : (
            <li onClick={toggleMenu}>
              <MdClose className="w-6 h-6" />
            </li>
          )}

          <h1 className="font-bold uppercase text-2xl">won shop</h1>
        </div>
        {/* this is for desktop menu */}
        <ul className="hidden md:flex space-x-4 px-3  uppercase font-semibold ">
          {ulItems}
        </ul>
        {/* this for mobile menu */}
        {isOpen && (
          <div className=" absolute top-14 left-0 bg-gray-100  w-1/2 rounded-2xl ">
            <ul className="flex flex-col space-y-1 font-semibold  uppercase  ">
              {ulItems}
            </ul>
          </div>
        )}

        {/* this for nav icon */}

        <div className="flex justify-end items-center space-x-4 pr-2">
          <ul className="flex space-x-2">
            <li><NavLink to="/profile">
            
              <FiUser className="w-4 h-4  md:w-6 md:h-6" />
            </NavLink>
            </li>
            <li>
              <FiShoppingCart className="w-4 h-4  md:w-6 md:h-6" />
            </li>
            {/* for search icon */}
            <li onClick={toggleSearch} className=" relative">
              <FiSearch className="w-4 h-4   md:w-6 md:h-6" />
            </li>
          </ul>
        </div>
        {isOpenSearch && (
          <div className=" absolute top-1/2 right-1 transform -translate-y-1/2 w-3/5 md:w-1/4  bg-gray-100 transition-all duration-1000">
            <SearchBar
              isOpenSearch={isOpenSearch}
              toggleSearch={toggleSearch}
            />
          </div>
        )}
      </nav>
    </div>
  );
}
