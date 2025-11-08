import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { router } from "./Layout/Router/router";


const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
 
};

export default App;

