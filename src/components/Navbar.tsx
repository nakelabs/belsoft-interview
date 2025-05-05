import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    const randomTop = Math.random() * 20 - 10; // Random vertical movement
    const randomLeft = Math.random() * 20 - 10; // Random horizontal movement
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <>
      <nav className="py-6 px-6 md:px-8 lg:px-12 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center relative">
          <img src="pic/WhatsApp Image 2024-07-02 at 19.41.31_2c96fd5a 2.png" alt="Founder's Friday" className="w-[81.14px] h-[80.63px]" />
          <span
            className="ml-4 font-montserrat font-bold text-[28px] leading-[120%] tracking-[0%] transition-transform hover:scale-110 hover:translate-x-2 hover:text-purple-500"
            style={{ width: "246px", height: "34px" }}
          >
            Founder’s Friday
          </span>
        </div>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className="font-montserrat font-medium text-[20px] leading-[120%] tracking-[0%] hover:text-purple-500 transition-colors inline-block w-[75px] h-[29px]"
          >
            Home
          </a>
          <a
            href="#"
            className="font-montserrat font-medium text-[20px] leading-[120%] tracking-[0%] hover:text-purple-500 transition-colors inline-block w-[113px] h-[29px]"
          >
            About Us
          </a>
          <a
            href="#"
            className="font-montserrat font-medium text-[20px] leading-[120%] tracking-[0%] hover:text-purple-500 transition-colors inline-block w-[85px] h-[29px]"
          >
            Gallery
          </a>
          <a
            href="#"
            className="font-montserrat font-medium text-[20px] leading-[120%] tracking-[0%] hover:text-purple-500 transition-colors inline-block w-[134px] h-[29px]"
          >
            Contact Us
          </a>
          <Button
            className="bg-white border-2 border-gray-500 text-gray-500 flex items-center justify-center gap-[11px] rounded-[20px] w-[196.52px] h-[59px] px-[30px] py-[15px] transition-transform hover:bg-gray-100 hover:text-gray-600 hover:scale-105 group"
          >
            <span className="flex items-center gap-2">
              Register
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <a href="#" className="text-sm font-medium hover:text-purple-500 transition-colors py-2">Home</a>
              <a href="#" className="text-sm font-medium hover:text-purple-500 transition-colors py-2">About Us</a>
              <a href="#" className="text-sm font-medium hover:text-purple-500 transition-colors py-2">Gallery</a>
              <a href="#" className="text-sm font-medium hover:text-purple-500 transition-colors py-2">Contact Us</a>
              <Button
                className="bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center gap-[11px] border-2 border-purple-500 rounded-[20px] w-[196.52px] h-[59px] px-[30px] py-[15px] transition-transform hover:scale-105 w-full"
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </nav>
      <div className="pt-[80px]">
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
