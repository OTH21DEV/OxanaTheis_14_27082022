import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import "../Header/header.css";
/*

  <NavLink activeClassName= {({ active }) => active? "active": 'nav-links__home'} to="/">Create Employee</NavLink> 
      <NavLink activeClassName= {({ active }) => active? "active": 'nav-links__all'} to="/allemployees">All employees</NavLink>
*/
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt=""></img>
        <h1>HRnet</h1>
        <div className="header-nav">
        <NavLink className= {({ isActive }) => isActive? "active": 'nav-links__home'} end to="/">Create Employee</NavLink> 
      <NavLink className= {({ isActive }) => isActive? "active": 'nav-links__all'} to="/allemployees">All employees</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
