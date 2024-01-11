import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimated" },
    { path: "/post-job", title: "Post a Job" },
  ];
  return (
    <header className="max-w-screen-full  xl:px-5 px-4 shadow-md shadow-gray-200  sticky top-0 z-50 bg-white">
      <nav className="flex justify-between items-center py-2">
        <a href="/" className="flex text-2xl">
          <img src="public/images/logo.png" alt="" />
        </a>

        {/* nav item for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* signup and login btn */}
        <div className="text-base text-primary font-medium space-x-5  lg-block">
          <Link to="/login" className="py-1 px-5 border rounded ring-1 ring-inset  focus-within:ring-blue text-[#26C9FF] hover:bg-blue hover:text-white hover:outline-none ">
            Log in
          </Link>
      
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <RxCross1 className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary " />
            )}
          </button>
        </div>
      </nav>

      {/* navitem for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen?"" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white first:text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1 "> <Link to="/login"   >
            Log in
          </Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
