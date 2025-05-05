import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mr Boldo Ngoy',
      role: 'CEO, TechStart',
      content: '"Founder\'s Friday has been instrumental in connecting me with like-minded entrepreneurs who understand my challenges and celebrate my wins."',
      image: '/pic/Ellipse 309.png',
    },
    {
      id: 2,
      name: 'Mr Boldo Ngoy',
      role: 'CTO, InnovateLabs',
      content: '"The insights and connections I\'ve gained from Founder\'s Friday meetings have significantly accelerated my startup\'s growth."',
      image: '/pic/Ellipse 309.png',
    },
    {
      id: 3,
      name: 'Mr Boldo Ngoy',
      role: 'Founder, NextGen',
      content: '"I look forward to every Founder\'s Friday event. It\'s become an essential part of my professional growth journey."',
      image: '/pic/Ellipse 309.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2
          className="text-3xl font-bold mb-12 text-center transition-transform duration-300 hover:scale-110 hover:text-purple-600 cursor-pointer"
        >
          What Do Our Attendees Have To Say?
        </h2>
        
        <div className="relative">
          <div className="flex justify-center mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
                } ${index === currentIndex ? 'mx-4' : 'mx-0'}`}
              >
                <div className={`w-24 h-24 rounded-full overflow-hidden border-4 ${
                  index === currentIndex ? 'border-purple-500' : 'border-gray-200'
                }`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">{testimonials[currentIndex].content}</p>
            <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-gray-300 transform transition-transform hover:scale-110 hover:border-purple-500 hover:bg-purple-100"
            >
              <ChevronLeft className="h-4 w-4 text-gray-500 hover:text-purple-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-gray-300 transform transition-transform hover:scale-110 hover:border-purple-500 hover:bg-purple-100"
            >
              <ChevronRight className="h-4 w-4 text-gray-500 hover:text-purple-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
