import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const EventSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 relative rounded-lg overflow-hidden">
            <img 
              src="/pic/IMG_2721 1.png" 
              alt="Founders Friday Event" 
              className="w-full h-80 object-cover transform transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button variant="outline" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm border-white w-16 h-16">
                <Play size={24} className="text-white" fill="white" />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 transform transition-transform hover:scale-110 hover:text-purple-500">
              At Founder’s Friday, Every Friday Is a Learning Experience!
            </h2>
            <p className="text-gray-600 mb-6">
            Join us in our mission to transform ideas into impact and shape the future of Abuja's startup landscape.
            </p>
            <Button
              className="bg-purple-500 hover:bg-purple-600 text-white self-start flex items-center justify-center gap-2 border-2 border-purple-500 rounded-[40px] w-[289px] h-[75px] px-[70px] py-[20px] transition-transform group"
            >
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
