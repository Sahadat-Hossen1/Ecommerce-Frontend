import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../../Components/Share/Header/Header.jsx'
import Footer from '../../Components/Share/Footer/Footer.jsx'
export default function Main() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

