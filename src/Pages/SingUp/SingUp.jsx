import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../Components/FirebaseConfig/FirebaseConfig";
import { use_Auth_Data_Context } from "../../Components/ContextApi/AuthContext";

export default function SignUp() {
  //class name
  const inputClassName =
    "w-full  py-2.5 md:py-3 pl-2  text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
  const labelClassName = "block text-sm font-medium text-gray-700";
//auth-data-context
const {auth}=use_Auth_Data_Context()
  const [FormData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;
    const password = form.password.value;
    const formObj = {
      name: name,
      email: email,
      age: age,
      password: password,
    };
    setFormData(formObj);

    //for authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user){
            return updateProfile(auth.currentUser,{
              displayName:name
            })
        }
      }
    ).then(()=>{
      alert("user successfully singup")
      console.log(auth.currentUser)
    }).catch((error) => console.log(error));
      form.reset()
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-2 md:p-4">
      <div className="w-full max-w-md mx-2">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-8 py-5 md:py-6">
            <h1 className="text-xl md:text-2xl font-bold text-white text-center">
              Create Account
            </h1>
            <p className="text-blue-100 text-center text-xs md:text-sm mt-1">
              Join our community today
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 md:p-8 space-y-4 md:space-y-6"
          >
            {/* Name Field */}
            <div className="space-y-1 md:space-y-2">
              <label className={`${labelClassName}`}>
                Full Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className={`${inputClassName}`}
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1 md:space-y-2">
              <label className={`${labelClassName}`}>
                Email Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className={`${inputClassName}`}
                required
              />
            </div>

            {/* Age Field */}
            <div className="space-y-1 md:space-y-2">
              <label className={`${labelClassName}`}>
                Age
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                name="age"
                placeholder="25"
                min="13"
                max="100"
                className={`${inputClassName}`}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1 md:space-y-2">
              <label className={`${labelClassName}`}>
                Password
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                minLength="8"
                className={`${inputClassName}`}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2.5 md:py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 active:scale-[0.98] md:hover:-translate-y-0.5 text-sm md:text-base"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-4 md:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs md:text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login - Stack on mobile, side by side on tablet/desktop */}
          <div className="w-full flex justify-center">
            <button
              type="button"
              className=" w-2/3 flex items-center justify-center text-sm md:text-lg font-medium text-gray-700 hover:text-gray-800 border border-blue-600 rounded-lg  py-2 md:py-2.5 hover:bg-blue-600 transition-all duration-200"
            >
              Google
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center py-2 md:pt-4">
            <p className="text-xs md:text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-800"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
