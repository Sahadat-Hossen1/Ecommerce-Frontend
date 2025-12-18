import React from "react";
import { use_Auth_Data_Context } from "../../Components/ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { User,handleSignOut } = use_Auth_Data_Context();
    const navigate = useNavigate();
    // const x=import.meta.env.VITE_NAME
    // console.log(x);
    
    
  const SignOut=()=>{
handleSignOut().catch(error=>console.log(error))
navigate('/')
  }

  return (
    <div>
      <h1>Profile user name:{User?.displayName} </h1>
      <button onClick={SignOut}> singOut</button>
    </div>
  );
}
