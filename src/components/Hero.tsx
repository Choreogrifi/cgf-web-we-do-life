import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../data/site-data';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-8">
            <div className="inline-block">
              <div className="flex items-center space-x-2 px-3 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium">
                <Sparkles size={16} />
                <span>Transformative Coaching & Therapy</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Discover Your</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Fullest Potential
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Professional guidance to help you overcome challenges, achieve your goals, and create a more fulfilling life through personalized coaching and therapy.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-8 py-4 text-center text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 font-medium"
              >
                Book Initial Consultation
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 text-center text-purple-700 bg-white border border-purple-200 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium"
              >
                Explore Services
              </a>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl transform md:translate-y-6 transition-all duration-500 hover:shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Life coaching session" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl font-bold text-purple-600">10+</p>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl font-bold text-purple-600">500+</p>
            <p className="text-gray-600 mt-2">Clients Helped</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl font-bold text-purple-600">98%</p>
            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-3xl font-bold text-purple-600">4</p>
            <p className="text-gray-600 mt-2">Specialized Services</p>
          </div>
        </div>
      </div>
      
      {/* Decorative curved shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;