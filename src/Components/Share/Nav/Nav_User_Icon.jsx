import React from 'react'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

export default function ({User}) {
  return (
    <>
     <NavLink  to={User? "/profile":"/singup"}>
                 {/* {
                    User.photoURL ? User?.photoURL:
                 } */}
                 {/* <img src={User?.photoURL} alt="" /> */}
                <FiUser className="w-6 h-6" />
              </NavLink></>
  )
}
