import React from "react";
import { use_Auth_Data_Context } from "../../../Components/ContextApi/AuthContext";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function SignIn_With_Google({ error, setError }) {
  const { signIn_with_google } = use_Auth_Data_Context();
  const navigate = useNavigate();
  const handle_google_signIn = () => {
   signIn_with_google().then(() => {
        
        navigate("/");
      })
      .catch((error) =>{ setError(error.message)});
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <button
          onClick={handle_google_signIn}
          type="button"
          className=" w-2/3 flex items-center justify-center text-sm md:text-lg font-medium text-gray-700 hover:text-gray-800 border border-blue-600 rounded-lg  py-2 md:py-2.5 hover:bg-blue-600 transition-all duration-200"
        >
          Google
        </button>
      </div>
    </>
  );
}
