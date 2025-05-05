import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Logo pushed to the left */}
        <img 
          src="/pic/Frame 8.png"
          alt="Founder's Friday Logo" 
          className="h-12 mb-8" 
        />
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 transform transition-transform hover:scale-110 hover:text-purple-500">
            Want To Be A Part Of Abuja's Biggest Tech 
            <span className="block">Community?</span>
          </h2>
          
          <div className="flex justify-center">
            <Button
              className="bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-50 flex items-center justify-center gap-[10px] rounded-[40px] w-[486.8px] h-[80px] px-[20px] py-[20px] transition-transform hover:scale-105 group"
            >
              <span>Register For Free Today</span>
              <span className="flex items-center gap-2">
                {/* First Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform group-hover:translate-x-4 group-hover:opacity-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                {/* Second Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform group-hover:translate-x-6 group-hover:opacity-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
