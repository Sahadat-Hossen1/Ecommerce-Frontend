import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Components/ContextApi/ContextApi";
// import images from "public/Headphone.jpg"

export default function HomeCategory() {
  const { Unic_Category_Name, Products_Data } = useContext(Context);
  // for select and take the value of category name
  // HsCategory =H(Home)s(selected)
  const [HsCategory, setHsCategory] = useState(null);
  const [filterByCategory, setFilterByCategory] = useState([]);
  const handleCategory = (category) => {
    setHsCategory(category);
  };
  useEffect(() => {
    const filter = Products_Data.filter((product) =>
      product.category.includes(HsCategory)
    );
    setFilterByCategory(filter);
  }, [HsCategory]);
  // use slice for show minimum amaunt of products
  const slice_product = HsCategory
    ? filterByCategory.slice(6)
    : Products_Data.slice(-20, -1);

  return (
    <div>
      <h1 className="py-4 text-center text-2xl font-bold font-serif">
        Select A Categroy
      </h1>
      <div className="mx-4 md:mx-20 rounded-2xl flex gap-2 items-center justify-center  py-2 bg-amber-200  text-2xl ">
        {Unic_Category_Name.map((category, i) => (
          <ul key={i} className="">
            <li
              className=" px-4 py-3 hover:bg-gray-200 rounded-2xl font-semibold uppercase font-serif cursor-pointer "
              onClick={() => handleCategory(category)}
            >
              {category}{" "}
            </li>
          </ul>
        ))}
      </div>
      {/* for show some cart */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 py-4">
        {/* {slice_product.map((product, i) => (
          <div
            key={i}
            className="w-full md:  flex flex-col space-y-2 "
            
          >
              <img
                // src={product.image}
                src='../../../public/Headphone.jpg'
                alt=""
                className=" w-full max-h-[150px]  rounded-t-2xl"
              />
              <div className="mx-2 w-full h-72 bg-amber-500">

              <h1 className="text-2xl md:text-3xl ">{product.model} </h1>

              <h2 className="text-xl ">Price:{product.price} </h2>
              <h3 className="text-lg">
                Brand_Name:<span className="uppercase">{product.brand}</span>{" "}
              </h3>
              <div className="flex justify-between  py-3 ">
                <button className="bg-gray-200 px-5 py-2 rounded-2xl text-lg hover:bg-gray-400">
                  Deailts{" "}
                </button>
                <button className="bg-gray-300 px-5 py-2 rounded-2xl text-lg hover:bg-gray-400">
                  {" "}
                  Buy Now
                </button>
              </div>
              </div>
            
          </div>
        ))} */}
        {slice_product.map((product, i) => (
          <div
            key={i}
            className="w-80 bg-white shadow-2xl flex flex-col rounded-2xl"
          >
            <img src={product.image} alt="" className="w-full h-52 " />
            <div className="mx-2">
              <h1 className="text-2xl md:text-3xl ">{product.model} </h1>

              <h2 className="text-xl ">Price:{product.price} </h2>
              <h3 className="text-lg">
                Brand_Name:<span className="uppercase">{product.brand}</span>{" "}
              </h3>
              <div className="flex justify-between  py-3 ">
                <button className="bg-gray-200 px-5 py-2 rounded-2xl text-lg hover:bg-gray-400">
                  Deailts{" "}
                </button>
                <button className="bg-gray-300 px-5 py-2 rounded-2xl text-lg hover:bg-gray-400">
                  {" "}
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
