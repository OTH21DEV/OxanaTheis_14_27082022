import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Header/header.css";

/**
 * Displays the header
 * @returns {JSX}
 */
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt=""></img>
        <h1>HRnet</h1>
        <div className="header-nav">
          <NavLink className={({ isActive }) => (isActive ? "active" : "nav-links__home")} end to="/">
            Create Employee
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "nav-links__all")} to="/allemployees">
            All Employees
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
