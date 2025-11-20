import React, {  createContext, useEffect, useState } from 'react';
//it's for creating context
export const Context=createContext({})
//start components
const ContextApi = ({children}) => {
  const[Products_Data,setProducts_Data]=useState([])
  const[Loading,setLoading]=useState(false)
//for fetching api
    useEffect(()=>{
      const fetchProduct=async()=>{
      try {
        setLoading(true)
        const res= await fetch('/public/Product.json');
        const data= await res.json()
        // console.log(data);
        if(data.length === 0 || data.length<1){

          console.log("something is wrong here");
        }else{
          setProducts_Data(data)
          
          
        }
        
      } catch (error) {
        console.log(error);
        
      }finally{
        setLoading(false)
      }
    }
      fetchProduct()
    },[])
    // for finding  unic category brand color 
    const Unic_Category_Name=[... new Set (Products_Data.map(product=>product.category))];
    const Unic_Brand_Name=[... new Set (Products_Data.map(product=>product.brand))];
    const Unic_Color_Name=[... new Set (Products_Data.map(product=>product.color))];
    
       
    
    // this for send or one kind of props
  const ContextInfo={Products_Data,Loading,Unic_Category_Name,Unic_Brand_Name,Unic_Color_Name}
//  end the components
    return (<Context.Provider value={ContextInfo}>{children} </Context.Provider>
    );
};

export default ContextApi;