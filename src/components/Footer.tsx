import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 relative group">
      {/* Purple Line */}
      <div className="absolute top-0 left-1/2 w-0 h-[2px] bg-purple-500 transition-all duration-500 group-hover:w-full transform -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Social Media Icons (Top on mobile, left on desktop) */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-purple-500 hover:text-purple-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-purple-500 hover:text-purple-600">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-purple-500 hover:text-purple-600">
              <Instagram size={20} />
            </a>
          </div>

          {/* Navigation Links (Bottom on mobile, right on desktop) */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <a
              href="#"
              className="text-purple-500 hover:text-purple-600 font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[120%] tracking-[0%] inline-block w-auto sm:w-[75px] h-[29px]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-500 font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[120%] tracking-[0%] inline-block w-auto sm:w-[113px] h-[29px]"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-500 font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[120%] tracking-[0%] inline-block w-auto sm:w-[85px] h-[29px]"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-500 font-montserrat font-medium text-[18px] sm:text-[20px] md:text-[24px] leading-[120%] tracking-[0%] inline-block w-auto sm:w-[134px] h-[29px]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
