import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className="menu">
      <div className="logo">
        <h1>
          E<span>A</span>
        </h1>
      </div>
      <div className="navbar">
        <NavLink to="/" className="nav">
          Home
        </NavLink>
        <NavLink to="/portfolio" className="nav">
          Portfolio
        </NavLink>
        <NavLink to="/about" className="nav">
          About
        </NavLink>
      </div>
      <div>
        <NavLink to="/404" className="nav">
          404
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/edon-abdullahu/"
          className="nav"
        >
          in
        </NavLink>
      </div>
    </div>
  );
}
