import React from 'react';
import AccordionItem from './AccordionItem';

const FAQSection = () => {
  const faqs = [
    {
      question: "How often do meetings take place?",
      answer: "Founder's Friday meetings are held monthly, typically on the last Friday of each month."
    },
    {
      question: "Who can attend Founder's Friday events?",
      answer: "Our events are open to tech entrepreneurs, startup founders, and individuals interested in the startup ecosystem."
    },
    {
      question: "Is there a fee to attend?",
      answer: "Most of our regular monthly meetups are free to attend, but some special events may have a nominal fee."
    },
    {
      question: "How can I become a speaker?",
      answer: "If you're interested in sharing your expertise as a speaker, please contact us through the form on our website."
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-left">FAQs</h2>
        
        {/* Removed max-w-3xl to allow full width */}
        <div>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              title={faq.question}
              content={faq.answer} icon={''}            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
