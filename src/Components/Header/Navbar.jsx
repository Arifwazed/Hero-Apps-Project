import React from "react";
import { Link, NavLink } from "react-router";

import logoImg from "../../assets/logo.png"
import contributeImg from "../../assets/contribute.png"

const Navbar = () => {
    const links = <>
    <NavLink to="/" className={({isActive}) => isActive ? "md:mr-8 bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold" : "md:mr-8"}>Home</NavLink>
    <NavLink to="/apps" className={({isActive}) => isActive ? "my-1 md:my-0 md:mr-8 bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-bold" : "my-1 md:my-0 md:mr-8"}>Apps</NavLink>
    <NavLink to="/installApp" className={({isActive}) => isActive ? " bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold" : ""}>Installation</NavLink>
     {/* <Link to="/"><li className="md:mr-8">Home</li></Link> */}
     {/* <Link to="/apps"><li className="my-1 md:my-0 md:mr-8">Apps</li></Link> */}
     {/* <Link to="/installApp"><li>Installation</li></Link> */}
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-5 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 py-2 px-4 shadow font-medium text-base"
            >
              {links}
              {/* <li>
                <a>Home</a>
              </li>
              <li>
                <a>Apps</a>
              </li>
              <li>
                <a>Installation</a>
              </li> */}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center text-base font-bold gap-x-1">
              <img src={logoImg} width="40px" alt="" />
              <h2 className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </h2>
            </div>
          </Link>
          {/* <a className="btn btn-ghost text-xl">HERO.IO</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base">
            {links}
            {/* <li>
              <a>Home</a>
            </li>
            <li>
              <a>Apps</a>
            </li>
            <li>
              <a>Installation</a>
            </li> */}
            
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="https://github.com/Arifwazed">
            <button className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-base">
              <img src={contributeImg} alt="" />
              Contribute
            </button>
          </Link>
          {/* <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-base">
            <img src={contributeImg} alt="" />
            Contribute</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
