import React, {useContext, useState } from 'react'
import { createContext } from 'react';
import app from '../FirebaseConfig/FirebaseConfig';
import {getAuth} from "firebase/auth"



export const Auth_Data_Context=createContext({})
export default function AuthContext({children}) {
  const auth = getAuth(app);


const [User,setUser]=useState(false) 
//sending all variable to other components
 const Auth_info={User,setUser,auth}
  return (
    <Auth_Data_Context.Provider value={Auth_info}>{children} </Auth_Data_Context.Provider>
  )
}
//for exprot auth-data-context 
export const use_Auth_Data_Context=()=>{
  return useContext(Auth_Data_Context)
}
