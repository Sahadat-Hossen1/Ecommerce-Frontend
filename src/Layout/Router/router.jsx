import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from './../../Pages/Home/Home';
import About from "../../Pages/About/About";
import AllProduct from "../../Pages/AlProduct/AllProduct";
import Contact from "../../Pages/Contact/Contact";
import Profile from "../../Pages/Profile/Profile";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";
import SignIn from "../../Pages/SignIn&SignUP/SignIn/SignIn";
import SignUp from "../../Pages/SignIn&SignUP/SignUp/SignUp";



export const router=createBrowserRouter(
  [

  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/allproduct",
        element:<AllProduct/>
      },{
        path:"/product/:id",
        element:<SingleProduct/>
      }
      ,
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/singin",
        element:<SignIn/>
      },
      {
        path:"/singup",
        element:<SignUp/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },{
        path:"*",
        element:<div className="flex justify-center items-center "><h1>404 Not Found</h1></div>
      }
    ]
  }
]


)
