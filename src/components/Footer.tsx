import React from 'react';
import { siteConfig } from '../data/site-data';
import { navItems } from '../data/site-data';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400 mb-6">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full text-purple-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-gray-800 rounded-full text-purple-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full text-purple-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Therapy Lane, Suite 101</p>
              <p>Mindful City, CA 90210</p>
              <p className="mt-4">
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors duration-200">
                  {siteConfig.contactEmail}
                </a>
              </p>
              <p className="mt-1">
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">
                  (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200 mx-2">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200 mx-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;