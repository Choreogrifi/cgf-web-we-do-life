import React from 'react';
import { siteConfig } from '../data/site-data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Dr. Alex Johnson</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dr. Alex Johnson" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 rounded-full z-0"></div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-2">
              {siteConfig.credentials}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900">My Approach to Healing & Growth</h3>
            
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience as both a clinical psychologist and life coach, I bring a unique blend of therapeutic expertise and action-oriented coaching to help clients achieve meaningful change.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My approach integrates evidence-based psychological practices with practical coaching strategies, creating a holistic framework that addresses both emotional healing and forward momentum. I believe that everyone has the capacity for growth and transformation when given the right support and tools.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>PhD in Clinical Psychology</li>
                  <li>Masters in Counseling Psychology</li>
                  <li>Certified Professional Coach</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Anxiety & Depression</li>
                  <li>Career Development</li>
                  <li>Relationship Counseling</li>
                  <li>Personal Growth</li>
                </ul>
              </div>
            </div>
            
            <a 
              href="#services" 
              className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              View my services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;