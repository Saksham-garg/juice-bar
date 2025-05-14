import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-700 shadow-md fixed top-0 z-50 flex justify-between w-full text-white"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-green-600">
            JuiceBar
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-green-600 transition cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-green-600 transition cursor-pointer"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="benefits"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-green-600 transition cursor-pointer"
            >
              Benefits
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-green-600 transition cursor-pointer"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="hover:text-green-600 transition cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 space-y-2 pb-2"
          >
            <ScrollLink
              to="about"
              smooth={true}
              duration={800}
              offset={-80}
              className="block px-3 py-2 hover:bg-gray-800 rounded"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              duration={800}
              offset={-80}
              className="block px-3 py-2 hover:bg-gray-800 rounded"
            >
              Menu
            </ScrollLink>
            <ScrollLink
              to="benefits"
              smooth={true}
              duration={800}
              offset={-80}
              className="block px-3 py-2 hover:bg-gray-800 rounded"
            >
              Benefits
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              smooth={true}
              duration={800}
              offset={-80}
              className="block px-3 py-2 hover:bg-gray-800 rounded"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="block px-3 py-2 hover:bg-gray-800 rounded"
            >
              Contact
            </ScrollLink>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
