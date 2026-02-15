import React, { useState } from "react";
import {Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-8 sm:px-2 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl tracking-wide text-white font-extrabold">
          SUDUR
          <span className="text-orange-600">
            CODE
          </span>
            <span className="text-3xl italic text-amber-400">
                X
                </span>
        </h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex px-8 space-x-8 text-md font-medium">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/">Home</Link>
            </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/about'>About</Link>
            </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/services'>Services</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/wrokshops'>WorkShops</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-2 pb-6">
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-blue-400 cursor-pointer">
            <Link to="/">Home</Link>
            </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/about'>About</Link>
            </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/services'>Services</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/wrokshops'>WorkShops</Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to='/contact'>Contact</Link>
          </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
