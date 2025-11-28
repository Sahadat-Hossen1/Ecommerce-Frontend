import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from './../../Pages/Home/Home';
import About from "../../Pages/About/About";
import AllProduct from "../../Pages/AlProduct/AllProduct";
import Contact from "../../Pages/Contact/Contact";
import SingIn from "../../Pages/SingIn/SingIn";
import SingUp from "../../Pages/SingUp/SingUp";
import Profile from "../../Pages/Profile/Profile";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";

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
        element:<SingIn/>
      },
      {
        path:"/singup",
        element:<SingUp/>
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
