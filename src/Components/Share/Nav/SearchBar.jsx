import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ isOpenSearch, toggleSearch }) {
  const [searchIndex, setSearchIndex] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const search=e.target.search.value;

    // alert(searchIndex);
    toggleSearch()
    console.log(searchIndex);
    

  };
  return (
    <div>
      {isOpenSearch && (
        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-gray-300 rounded-xl px-2"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-1 border-none focus:outline-none  "
            value={searchIndex}
            name="search"
            onChange={(e)=>setSearchIndex(e.target.value)}

          />
          <button type="submit">
            <FiSearch  />
          </button>
        </form>
      )}
    </div>
  );
}
