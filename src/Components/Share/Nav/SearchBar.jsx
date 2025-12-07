// import React, { useState, useContext } from "react";
// import { FiSearch } from "react-icons/fi";
// import { Product_Context } from "./../../ContextApi/ContextApi";

// export default function SearchBar({ isOpenSearch, toggleSearch }) {
//   const { SearchInput, setSearchInput } = useContext(Product_Context);
//   console.log(SearchInput);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // const input=e.target;
//     const inputValue = e.target.search.value.trim();
//     // setSearchInput(inputValue);
//     // alert(searchIndex);
//     toggleSearch();
//   };
//   console.log(SearchInput);
//   return (
//     <div>
//       {isOpenSearch && (
//         <form
//           onSubmit={handleSubmit}
//           className="flex items-center border border-gray-300 rounded-xl px-2"
//         >
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full p-1 border-none focus:outline-none  "
//             value={SearchInput}
//             name="search"
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//           <button type="submit">
//             <FiSearch />
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Product_Context } from "./../../ContextApi/ContextApi";

export default function SearchBar({ isOpenSearch, toggleSearch }) {
  const {After_Filter_Product, setAfter_Filter_Product,Products_Data } =
    useContext(Product_Context);
const test=Products_Data.filter((product)=>product.category.includes("mobile")) 
console.log(test);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    let inputValue = form.search.value.trim();
    try {
      let filtered = Products_Data;
      //
      filtered = After_Filter_Product.filter((product) => {
        const search = inputValue.toLowerCase();
        const p=(
          product.brand + "" +
          product.category + "" +
          product.color + "" +
          product.model + "" +
          product.description
          
        ).toLowerCase()
      return search.split(' ').every(word=>p.includes(word))
      });
      //
      
      setAfter_Filter_Product(filtered);
    } catch (error) {
      console.log(error);
    }
    form.reset();
    toggleSearch();
  };

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
