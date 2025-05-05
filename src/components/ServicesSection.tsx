import React, { useState } from 'react';
import { Calendar, Users, BookOpen, HandshakeIcon, Heart } from 'lucide-react';

interface AccordionItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
}

const AccordionItem = ({ icon, title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        type="button"
        className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center space-x-4">
          <div>{icon}</div>
          <h3 className="font-montserrat font-semibold text-[22px] sm:text-[30px] leading-[120%] tracking-[0%] transition-transform hover:scale-110 hover:text-purple-500">
            {title}
          </h3>
        </div>
        <span className="mt-2 sm:mt-0 ml-0 sm:ml-2">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-4 sm:mt-2">
          <div className="font-montserrat font-semibold text-[15px] sm:text-[16px] leading-[160%] tracking-[0%] text-[#75687E]">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => {
  const CircleIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
      {children}
    </div>
  );

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2
          className="text-[45px] font-bold mb-8 text-center font-montserrat leading-[125%] tracking-[0%] transform transition-transform hover:scale-110 hover:text-purple-500"
        >
          What We Offer
        </h2>

        <div className="max-w-[1476.8px] mx-auto grid gap-8">
          <AccordionItem
            icon={<CircleIcon><Calendar size={16} /></CircleIcon>}
            title="Monthly Meetups"
            content="Regular gatherings where founders connect, share experiences, and learn from industry experts in a relaxed and welcoming environment."
          />

          <AccordionItem
            icon={<CircleIcon><Users size={16} /></CircleIcon>}
            title="Diverse Network"
            content="Access to a wide range of entrepreneurs at different stages of their journey, from early-stage startups to established business owners."
          />

          <AccordionItem
            icon={<CircleIcon><BookOpen size={16} /></CircleIcon>}
            title="Knowledge Sharing"
            content="Curated presentations and workshops on relevant topics like fundraising, product development, marketing strategies, and operational efficiency."
          />

          <AccordionItem
            icon={<CircleIcon><HandshakeIcon size={16} /></CircleIcon>}
            title="Collaboration Opportunities"
            content="Platform to find potential co-founders, partners, mentors, or advisors who can contribute to your business growth."
          />

          <AccordionItem
            icon={<CircleIcon><Heart size={16} /></CircleIcon>}
            title="Community Support"
            content="A supportive ecosystem of founders who understand the challenges of entrepreneurship and are willing to offer advice and encouragement."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
