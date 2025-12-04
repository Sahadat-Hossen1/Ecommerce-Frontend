import React, { useEffect } from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./Layout/Router/router";

const App = () => {
// useEffect(()=>{
//   window.scrollTo(0,0)
//  },[])
  return <RouterProvider router={router}></RouterProvider>;
 
};

export default App;

