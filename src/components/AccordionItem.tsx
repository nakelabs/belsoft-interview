import React, { useState, ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  icon: ReactNode; // Accepts JSX.Element, string, etc.
  title: ReactNode; // Accepts JSX.Element, string, etc.
  content: string; // Assuming content is a string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
        aria-expanded={!!isOpen} // Ensure valid boolean value
      >
        <div className="flex items-center">
          {icon && (
            <div className="mr-4 text-purple-500">
              {icon}
            </div>
          )}
          <span className="font-medium">{title}</span>
        </div>
        <div>
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </button>
      {isOpen && (
        <div className="py-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
