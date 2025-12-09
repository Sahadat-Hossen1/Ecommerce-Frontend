import React, { Children } from 'react'
import { createContext } from 'react';

export const Auth_Data_Context=createContext({})
export default function AuthContext({children}) {
    const name="sahadat"
    const Auth_info={name,}
  return (
    <Auth_Data_Context.Provider value={Auth_info}>{children} </Auth_Data_Context.Provider>
  )
}
