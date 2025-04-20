import React, { useState } from 'react';
import { testimonials } from '../data/site-data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Hear from people who have transformed their lives through our services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 z-0 opacity-10">
            <Quote size={80} />
          </div>

          {/* Testimonial cards */}
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 absolute top-0 translate-x-8'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="bg-white border border-purple-100 rounded-xl shadow-lg p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-purple-100"
                      />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl text-gray-600 italic mb-6">"{testimonial.content}"</p>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeIndex ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-700 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;