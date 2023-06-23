import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/About">About Me</Link></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">PurpxPanda</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/About">About Me</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>My Work</summary>
          <ul className="p-2">
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
};

export default Navigation;
