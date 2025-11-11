import react, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TiSocialFacebook,TiSocialInstagram,TiSocialGithub,TiSocialLinkedin } from "react-icons/ti";
import { Context } from "../../ContextApi/ContextApi";



export default function Footer() {const {user}=useContext(Context)
  return (
    <div className="bg-amber-100  flex flex-col   items-center p-3">
        {user?.name}
     <div className="flex space-x-10 justify-between">
         {/* this for subscription */}
      <div className="w-full md:w-3/5   flex flex-col space-y-3   ">
        <h1 className="font-semibold text-2xl ">Newsletter</h1>
        <p className="pr-6">
          Be the first to hear about new products,exclusive events and online
          offers
        </p>
        <label>Sign up and get 5% off your first order.</label>
        <form className="border rounded-md w-2/3 flex justify-between  ">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-none focus:outline-none"
          />
          <button
            type="submit"
            className="border w-2/5 rounded-md border-none bg-gray-200  font-semibold text-xl py-1 hover:bg-gray-300"
          >
            Subcribe{" "}
          </button>
        </form>
      </div>
      {/* this for show nave on footer */}
    
     
      <div className="w-full md:w-2/5">
        <h1 className="text-3xl py-2">Shop Now </h1>
         <ul className="flex flex-col  space-y-2 text-lg   uppercase  ">
        <li className="">
          <NavLink to="/">home</NavLink>
        </li>
        <li className="">
          <NavLink to="/about">about</NavLink>
        </li>
        <li className="">
          <NavLink to="/allproduct">allproduct</NavLink>
        </li>
        <li className="">
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
      </div>
     </div>

      
      {/* this for icons and link with icons */}
      <div>
        <div className="flex justify-center space-x-3">
        <TiSocialFacebook className="w-6 h-6 cursor-pointer"/>
        <TiSocialLinkedin className="w-6 h-6 cursor-pointer"/>
        <TiSocialGithub className="w-6 h-6 cursor-pointer"/>
        <TiSocialInstagram className="w-6 h-6 cursor-pointer"/>

      </div>
      <p>
        @Powered By Sahadat Hossen
      </p>
      </div>
    </div>
  );
}