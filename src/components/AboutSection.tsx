import React from 'react';
import { Button } from "@/components/ui/button";
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="#FDF7FF">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="rounded-lg overflow-hidden transform transition-transform hover:scale-110">
              <img 
                src="/pic/IMG_2857 1.png" 
                alt="Founders Friday Team" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div
            ref={ref}
            className={`md:col-span-7 transition-transform duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 relative transform transition-transform hover:scale-110 hover:text-purple-500">
              <span className="text-gray-400">— </span>
              Who Are We?
            </h2>
            <p
              className="text-lg transform transition-transform hover:scale-105 hover:text-purple-500"
              style={{ color: '#8E8E93' }}
            >
              Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent, high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.
            </p>
            <p
              className="text-lg mb-6 transform transition-transform hover:scale-105 hover:text-purple-500"
              style={{ color: '#8E8E93' }}
            >
              Join us at the next Founder's Friday and be part of Abuja's most dynamic startup community. Together, we're not just sharing ideas—we're shaping the future of tech in our city.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 items-stretch sm:items-center">
              <Button className="bg-purple-500 hover:bg-purple-700 text-white text-xl flex items-center justify-center gap-[10px] border-2 border-purple-500 rounded-[40px] w-full sm:w-[289px] h-[60px] sm:h-[75px] px-6 sm:px-[70px] py-4 sm:py-[20px] shadow-lg transform hover:scale-110 transition-transform group">
                <span>REGISTER</span>
                {/* Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 transition-transform group-hover:translate-x-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Button>
              <Button className="border-2 border-purple-500 bg-white hover:bg-purple-100 text-purple-500 text-xl flex items-center justify-center gap-[10px] rounded-[40px] w-full sm:w-[289px] h-[60px] sm:h-[75px] px-6 sm:px-[70px] py-4 sm:py-[20px] shadow-md transform hover:scale-105 transition-transform group">
                <span>DONATE</span>
                {/* Emoji */}
                <span
                  className="transition-transform group-hover:rotate-12 group-hover:translate-x-2 group-hover:translate-y-1"
                >
                  💰
                </span>
              </Button>
            </div>

            {/* Text */}
            <div className="mt-8 text-center relative">
              <p
                className="font-medium text-lg relative inline-block transform transition-transform hover:scale-110 hover:text-purple-500"
                style={{ color: '#8E8E93' }}
              >
                Founder's Friday is more than just a meetup — it's a movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
