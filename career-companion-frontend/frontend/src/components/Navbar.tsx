import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full text-text p-4 fixed top-0 z-50 py-4 shadow-md bg-background-secondary"
    >
      <div className="mx-auto flex justify-between items-center relative z-50">
        <Link to="/" className="text-text font-bold text-xl">
          Career Companion
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/explore" className="text-text">
            Explore Careers
          </Link>
          <Link to="/resources" className="text-text">
            Resources
          </Link>
          <Link to="/about" className="text-text">
            About Us
          </Link>
          <Link to="/login" className="text-text">
            Login
          </Link>
          <Link to="/register" className="text-text">
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.829 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/explore" className="block text-text py-2">
            Explore Careers
          </Link>
          <Link to="/resources" className="block text-text py-2">
            Resources
          </Link>
          <Link to="/community" className="block text-text py-2">
            Community
          </Link>
          <Link to="/profile" className="block text-text py-2">
            Profile
          </Link>
          <Link to="/login" className="block text-text py-2">
            Login
          </Link>
          <Link to="/register" className="block text-text py-2">
            Register
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;