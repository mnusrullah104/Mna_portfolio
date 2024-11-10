import React, { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full top-0 left-0 bg-gray-800 z-50">
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Brand Name */}
        <div className="text-xl font-semibold text-pink-700 font-bold text-2xl">
          Portfolio
        </div>

        {/* Desktop Navigation */}
        <ul className="gap-10 lg:gap-16 hidden md:flex text-white">
          <li><a href="#home" className="hover:text-pink-700">Home</a></li>
          <li><a href="#about" className="hover:text-pink-700">About</a></li>
          <li><a href="#projects" className="hover:text-pink-700">Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-700">Skills</a></li>
          <li><a href="#contact" className="hover:text-pink-700">Contact</a></li>
        </ul>

        {/* Burger Button for Mobile */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-gray-800 text-white">
          <li><a href="#home" className="hover:text-pink-700" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" className="hover:text-pink-700" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" className="hover:text-pink-700" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-700" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" className="hover:text-pink-700" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
