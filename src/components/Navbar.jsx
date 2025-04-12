import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold dark:text-white">URIdea</h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">About</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
          <Link to="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Pricing</Link>
          <Link to="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Services</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={24} className="text-gray-900 dark:text-white" /> : <IoMenu size={24} className="text-gray-900 dark:text-white" />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 z-90 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <IoClose size={24} className="text-gray-900 dark:text-white" />
        </button>
        <div className="flex flex-col space-y-6 p-6 mt-12">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
