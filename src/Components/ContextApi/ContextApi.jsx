import React, { createContext, useEffect, useState } from "react";
//it's for creating context
export const Product_Context = createContext({});
//start components
const ContextApi = ({ children }) => {
  // products_data for store all product after fetching api/json file
  const [Products_Data, setProducts_Data] = useState([]);
  const [Loading, setLoading] = useState(false);
  //for select the category name for filter
  const [SelectedCategory, setSelectedCategory] = useState([]);

  //for select the brand name for filter
  const [SelectedBrand, setSelectedBrand] = useState([]);

  //for select the color name for filter
  const [SelectedColor, setSelectedColor] = useState([]);

  //for fetching api
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch("/public/Product.json");
        const data = await res.json();
        // console.log(data);
        if (data.length === 0 || data.length < 1) {
          console.log("something is wrong here");
        } else {
          setProducts_Data(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);
  // for finding  unic category brand color
  const Unic_Category_Name = [
    ...new Set(Products_Data.map((product) => product.category)),
  ];

  const Unic_Brand_Name = [
    ...new Set(Products_Data.map((product) => product.brand)),
  ];
  const Unic_Color_Name = [
    ...new Set(Products_Data.map((product) => product.color)),
  ];
  //for test and check in console.log
  // useEffect(()=>{

  //   console.log(SelectedCategory);
  //   console.log(SelectedCategory.length);

  // },[SelectedCategory])
  // this for send or one kind of props
  const ContextInfo = {
    Products_Data,
    Loading,
    Unic_Category_Name,
    Unic_Brand_Name,
    Unic_Color_Name,
    SelectedCategory,
    setSelectedCategory,
    SelectedBrand,
    setSelectedBrand,
    SelectedColor,setSelectedColor
  };
  //  end the components
  return (
    <Product_Context.Provider value={ContextInfo}>
      {children}{" "}
    </Product_Context.Provider>
  );
};

export default ContextApi;
