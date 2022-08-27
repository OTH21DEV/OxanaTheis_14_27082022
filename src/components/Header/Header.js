import React from 'react'
import logo from "../../assets/logo1.png"
import "../Header/header.css";

const Header = () => {
  return (
    <div className='header'>
         <img src={logo} alt=""></img>
         <h1>HRnet</h1>
    </div>
  )
}

export default Header