import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const AVATAR_SIZE = 110; // px
const AVATAR_RADIUS = AVATAR_SIZE / 2;
const containerWidth = 900;
const containerHeight = 220;

// Adjusted left for last avatar to fit within 900px width
const avatars = [
  { top: 180, left: 0, borderColor: "#8300ff" },
  { top: 0, left: 130, borderColor: "#2f6c62" },
  { top: 80, left: 260, borderColor: "#ff3b30" },
  { top: 120, left: 390, borderColor: "#007aff" },
  { top: 80, left: 520, borderColor: "#ff3b30" },
  { top: 0, left: 650, borderColor: "#30b0c7" },
  { top: 180, left: 735, borderColor: "#ff9500" }, // <-- moved left from 790 to 735
];

const CommunitySection = () => {
  // Calculate SVG path through all avatar centers
  const pathPoints = avatars.map((avatar) => {
    const x = avatar.left + AVATAR_RADIUS;
    const y = avatar.top + AVATAR_RADIUS;
    return `${x},${y}`;
  });

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-6 transition-transform duration-300 hover:scale-110 hover:text-purple-600 cursor-pointer"
          >
            Register And Be Part of Our Community
          </h2>
          <p className="text-gray-600 mb-12">
            Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!
          </p>
          {/* Avatar arrangement with SVG line */}
          <div
            className="relative w-full max-w-[900px] h-[220px] mx-auto mb-12 hidden sm:block"
            style={{ minWidth: 320 }}
          >
            <svg
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{ pointerEvents: 'none' }}
              width={containerWidth}
              height={containerHeight}
            >
              <polyline
                points={pathPoints.join(' ')}
                fill="none"
                stroke="#8300ff"
                strokeWidth="6"
              />
            </svg>
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className="absolute flex items-center justify-center w-[110px] h-[110px] rounded-full border-[4px] border-solid bg-white"
                style={{
                  top: avatar.top,
                  left: avatar.left,
                  borderColor: avatar.borderColor,
                  transform: "translate(0, 0)",
                  zIndex: 1,
                }}
              >
                <Avatar className="w-[90px] h-[90px]">
                  <AvatarImage
                    src="/pic/Ellipse 309.png"
                    alt="Profile"
                    className="object-cover"
                  />
                </Avatar>
              </div>
            ))}
          </div>
          {/* Fallback for mobile: simple row */}
          <div className="flex sm:hidden gap-4 justify-center mb-12">
            {avatars.slice(0, 5).map((avatar, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-solid bg-white"
                style={{
                  borderColor: avatar.borderColor,
                }}
              >
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src="/pic/Ellipse 309.png"
                    alt="Profile"
                    className="object-cover"
                  />
                </Avatar>
              </div>
            ))}
          </div>
          <Button
            className="border-3 border-purple-500 bg-white text-purple-500 flex items-center justify-center gap-[10px] rounded-[40px] w-full max-w-xs h-[60px] px-8 py-4 hover:bg-purple-100 hover:text-purple-700 transition mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span>REGISTER NOW</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
