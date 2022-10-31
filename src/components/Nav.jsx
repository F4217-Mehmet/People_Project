import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
      </div>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive && "red" })}
            to="/"
            className="nav-link active"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive && "red" })}
            to="/people"
            className="nav-link"
            aria-current="page"
          >
            People
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive && "red" })}
            to="/paths"
            className="nav-link"
            aria-current="page"
          >
            Paths
          </NavLink>
          <NavLink
            style={({ isActive }) => ({ color: isActive && "red" })}
            to="/contact"
            className="nav-link"
            aria-current="page"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
