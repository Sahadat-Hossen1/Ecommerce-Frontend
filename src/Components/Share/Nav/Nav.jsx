import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiAlignJustify,
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

import { MdClose } from "react-icons/md";
import SearchBar from "./SearchBar";
import { Product_Context } from "../../ContextApi/ContextApi";
import ShopingCartSideBar from "../../ShopingSideBar/ShopingCartSideBar";
import { use_Auth_Data_Context } from "../../ContextApi/AuthContext";
import Nav_User_Icon from "./Nav_User_Icon";

export default function Nav() {
  //user info
  const { User } = use_Auth_Data_Context();

  //for show how many items added or items length
  const { All_addToCart_p } = useContext(Product_Context);
  // console.log(All_addToCart_p);
  const items = All_addToCart_p.length;
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
  // for shoping cart
  const [isCart, setIsCart] = useState(false);
  const toggleCart = () => {
    setIsCart(!isCart);
  };
  // this for ul items
  const ulItems = (
    <>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 rounded p-2">
        <NavLink to="/">home</NavLink>
      </li>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 rounded p-2">
        <NavLink to="/about">about</NavLink>
      </li>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 rounded p-2">
        <NavLink to="/allproduct">allproduct</NavLink>
      </li>
      <li className="font-serif hover:text-black text-gray-700 hover:bg-amber-100 rounded p-2">
        <NavLink to="/contact">contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between bg-white shadow-2xs mb-2 md:mb-6">
      <nav className="flex items-center justify-between  w-full py-3 px-2 relative">
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

          <NavLink to="/" className="font-bold uppercase text-2xl">won shop</NavLink>
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
            {/* for search icon */}
            <li onClick={toggleSearch} className=" relative ">
              <FiSearch className="w-6 h-6" />
            </li>
            <li onClick={toggleCart} className="relative  ">
              <FiShoppingCart className="w-6 h-6 inline" />
              <span className="bg-red-500 px-1.5 rounded-full text-[12px] absolute -top-2 left-3 ">
                {items}{" "}
              </span>
            </li>
            <li>
             <Nav_User_Icon User={User}/>
            </li>
          </ul>
        </div>
        {/* for showing searchbar in nave */}
        {isOpenSearch && (
          <div className=" absolute top-1/2 right-1 transform -translate-y-1/2 w-3/5 md:w-1/4  bg-gray-100 transition-all duration-1000">
            <SearchBar
              isOpenSearch={isOpenSearch}
              toggleSearch={toggleSearch}
            />
          </div>
        )}
        {/* for show shoping cart */}
        {isCart && (
          <div className=" absolute top-0 right-1 w-1/2 md:w-1/4 100 transition-all duration-1000">
            <ShopingCartSideBar isCart={isCart} toggleCart={toggleCart} />
          </div>
        )}
      </nav>
    </div>
  );
}
