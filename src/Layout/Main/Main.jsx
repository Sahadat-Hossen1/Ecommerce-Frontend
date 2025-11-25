import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Share/Header/Header.jsx";
import Footer from "../../Components/Share/Footer/Footer.jsx";
import {Product_Context } from "../../Components/ContextApi/ContextApi.jsx";
export default function Main() {
  const { Loading } = useContext(Product_Context);
  // let loadingTag;
  // if (Loading) {
  //   loadingTag = <h1>Loading.......</h1>;
  // }
  return (
    <div className="bg-[f2f4f8] font-serif ">
      <Header />
      {Loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <h1 className="text-red-400 text-3xl">Loading..... </h1>{" "}
        </div>
      ) : (<div className="w-full min-h-screen">

        <Outlet />
      </div>
      )}
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}
