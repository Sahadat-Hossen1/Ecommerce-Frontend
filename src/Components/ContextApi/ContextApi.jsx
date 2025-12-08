import React, { createContext, useEffect, useState } from "react";

//it's for creating context
export const Product_Context = createContext({});
//start components
const ContextApi = ({ children }) => {
  // products_data for store all product after fetching api/json file
  const [Products_Data, setProducts_Data] = useState([]);
  // after filter product by category,brand,color,price and by search product store here
  const [After_Filter_Product, setAfter_Filter_Product] = useState([]);
  // console.log(After_Filter_Product.filter(product=>product.title));

  const [Loading, setLoading] = useState(false);
  //for select the category name for filter
  const [SelectedCategory, setSelectedCategory] = useState([]);

  //for select the brand name for filter
  const [SelectedBrand, setSelectedBrand] = useState([]);

  //for select the color name for filter
  const [SelectedColor, setSelectedColor] = useState([]);
  //for select the price
  const [MinPrice, setMinPrice] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(1000);
  //for add to cart when user add any product
  const [Counter, setCounter] = useState(1000);

  const [All_addToCart_p, setAll_addToCart_p] = useState([]);

  //for fetching api
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch("/Product.json");
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
  // for finding  unic category, brand, color name

  const Unic_Category_Name = [
    ...new Set(Products_Data.map((product) => product.category)),
  ];

  const Unic_Brand_Name = [
    ...new Set(Products_Data.map((product) => product.brand)),
  ];
  const Unic_Color_Name = [
    ...new Set(Products_Data.map((product) => product.color)),
  ];
  //for filetering product by selecting method
  useEffect(() => {
    let filtered = [...Products_Data];
  
      //filter by category
      if (SelectedCategory.length > 0) {
        filtered = filtered.filter((product) => {
          return SelectedCategory.includes(product.category);
        });
      }
      //filter by brand
      if (SelectedBrand.length > 0) {
        filtered = filtered.filter((product) => {
          return SelectedBrand.includes(product.brand);
        });
      }
      //filter by color
      if (SelectedColor.length > 0) {
        filtered = filtered.filter((product) => {
          return SelectedColor.includes(product.color);
        });
      }

      
   if (MinPrice != null && MaxPrice != null) {
    filtered = filtered.filter(product =>
      product.price >= Number(MinPrice) &&
      product.price <= Number(MaxPrice)
    );
  }

    setAfter_Filter_Product(filtered);
  }, [
    Products_Data,
    SelectedCategory,
    SelectedBrand,
    SelectedColor,
    MinPrice,
    MaxPrice,
  ]);

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
    SelectedColor,
    setSelectedColor,
    MinPrice,
    setMinPrice,
    MaxPrice,
    setMaxPrice,
    After_Filter_Product,
    setAfter_Filter_Product,
    Counter,
    setCounter,
    All_addToCart_p,
    setAll_addToCart_p,
  };
  //  end the components
  return (
    <Product_Context.Provider value={ContextInfo}>
      {children}{" "}
    </Product_Context.Provider>
  );
};

export default ContextApi;
