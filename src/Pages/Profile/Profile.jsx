import React from "react";
import { use_Auth_Data_Context } from "../../Components/ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { User,handleSingOut } = use_Auth_Data_Context();
    const navigate = useNavigate();

  const SignOut=()=>{
handleSingOut()
navigate('/')
  }
  return (
    <div>
      <h1>Profile user name:{User?.displayName} </h1>
      <button onClick={SignOut}> singOut</button>
    </div>
  );
}
