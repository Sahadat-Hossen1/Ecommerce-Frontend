import React, { useState, useContext, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Product_Context } from "./../../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ isOpenSearch, toggleSearch }) {
  const { After_Filter_Product, setAfter_Filter_Product, Products_Data } =
    useContext(Product_Context);
  const navigate = useNavigate();
  //
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    let inputValue = form.search.value.trim();
    toggleSearch();

    if (!inputValue) return;
    
      try {
        let filtered = [...Products_Data];

        filtered = Products_Data.filter((product) => {
          const search = inputValue.toLowerCase();
          const p = (
            product.brand +
            "" +
            product.category +
            "" +
            product.color +
            "" +
            product.model +
            "" +
            product.description
          ).toLowerCase();
          return search.split(" ").every((word) => p.includes(word));
        });
        //

        setAfter_Filter_Product(filtered);
      } catch (error) {
        console.log(error);
      }
          navigate("/allproduct");

   

    form.reset();
  };

  const newSearch = (inputValue) => {};

  return (
    <div>
      {isOpenSearch && (
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-gray-300 rounded-xl px-2"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-1 border-none focus:outline-none"
            name="search"
            // required
            //  required
            // value={SearchInput}

            // onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">
            <FiSearch />
          </button>
        </form>
      )}
    </div>
  );
}
