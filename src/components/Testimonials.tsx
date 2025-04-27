import React, { useState } from 'react';
import { testimonials } from '../data/content';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Thousands of people have found their perfect living situation with My Homies. Here are some of their stories:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            <Quote className="absolute top-0 left-0 text-indigo-200 w-16 h-16 -mt-6 -ml-4 transform -rotate-12" />
            
            <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-100">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonials[activeIndex].content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-indigo-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-indigo-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;