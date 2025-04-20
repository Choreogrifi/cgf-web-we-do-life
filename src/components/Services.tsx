import React from 'react';
import { services } from '../data/site-data';
import { Brain, Goal, Heart, Users } from 'lucide-react';

const Services: React.FC = () => {
  // Function to render the appropriate icon based on icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-10 h-10 text-purple-600" />;
      case 'Goal':
        return <Goal className="w-10 h-10 text-purple-600" />;
      case 'Heart':
        return <Heart className="w-10 h-10 text-purple-600" />;
      case 'Users':
        return <Users className="w-10 h-10 text-purple-600" />;
      default:
        return <Goal className="w-10 h-10 text-purple-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Comprehensive support for your mental wellbeing and personal development journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {renderIcon(service.icon)}
                  <h3 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-200"
                >
                  Schedule a session
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-purple-100 rounded-lg">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Not sure which service is right for you?
            </p>
            <a 
              href="#contact"
              className="inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Book a free 15-minute consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;