import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      } text-zinc-600`}
    >
      <div className="mx-auto px-8 sm:px-2 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl tracking-wide font-extrabold">
          SUDUR
          <span className="text-orange-600">CODE</span>
          <span className="text-3xl italic text-amber-400">X</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex px-8 py-4 rounded-3xl
          
          space-x-8 text-md font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-8"
                : "hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-8"
                : "hover:text-blue-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-8"
                : "hover:text-blue-400 transition"
            }
          >
            Services
          </NavLink>

          {/* <NavLink
            to="/workshops"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-8"
                : "hover:text-blue-400 transition"
            }
          >
            WorkShops
          </NavLink> */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 underline underline-offset-8"
                : "hover:text-blue-400 transition"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-orange-600 text-white font-bold py-2 px-5 rounded transition active:scale-90 hover:bg-orange-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-2 pb-6">
          <ul className="space-y-4 text-sm font-medium">

            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>

            {/* <li>
              <Link to="/workshops" onClick={() => setIsOpen(false)}>WorkShops</Link>
            </li> */}

            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
