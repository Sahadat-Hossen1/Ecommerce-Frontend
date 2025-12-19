import React from "react";
import { use_Auth_Data_Context } from "../../Components/ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { User, handleSignOut } = use_Auth_Data_Context();
  const navigate = useNavigate();
  // const x=import.meta.env.VITE_NAME
  // console.log(x);

  const SignOut = () => {
    handleSignOut().catch((error) => console.log(error));
    navigate("/");
  };
  //demo product 
  const demo_product=[]

  return (
    <div className="w-[80%] mx-auto ">
      {/* <h1>Profile user name:{User?.displayName} </h1>
      <button onClick={SignOut}> singOut</button> */}
      <div className="flex justify-between  ">
        <h1 className="font-bold text-xl md:text-2xl">Account</h1>
        <button
          onClick={SignOut}
          className="bg-gray-800 text-white px-3 py-2 rounded-2xl hover:bg-gray-900  transition-all delay-200"
        >
          Log Out
        </button>
      </div>
      <div className="flex justify-between ">
        {/* there will be user all details */}
        <div className="bg-amber-50 w-[35%] rounded-2xl py-4 pl-3 flex flex-col space-y-1.5" >
          <h1 className="text-2xl ">Account details</h1>
          <h3>Name: {User?.displayName} </h3>
          <h4> Address: {User?.address}</h4>
        </div>
        {/* there will all checkout product which had user checkout */}
        <div className="w-[60%]">
          <h5 className="text-2xl py-3">Order history</h5>
            <div>
              {
                demo_product.length !==0 ? <p>product list </p>:<p>You haven't placed any orders yet.

</p>
              }
            </div>
        </div>
      </div>
    </div>
  );
}
