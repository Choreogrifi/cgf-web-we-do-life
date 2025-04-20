import React from 'react';
import { siteConfig } from '../data/site-data';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Ready to start your journey? Reach out to schedule a session or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact information */}
          <div className="lg:col-span-2 bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Office Location</p>
                  <p className="text-gray-600">123 Therapy Lane, Suite 101<br />Mindful City, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Email</p>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-purple-600 hover:underline">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-purple-600 mt-1" />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-gray-900 mb-3">Connect with me</p>
                <div className="flex space-x-4">
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white rounded-full text-purple-600 hover:text-purple-800 transition-colors duration-200">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-white rounded-full text-purple-600 hover:text-purple-800 transition-colors duration-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 bg-white rounded-full text-purple-600 hover:text-purple-800 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-gray-900 mb-3">Hours of Operation</h4>
              <ul className="text-gray-600">
                <li className="flex justify-between py-1">
                  <span>Monday - Thursday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Saturday - Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Google Form embed */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <iframe 
                src={siteConfig.googleFormUrl}
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Contact Form"
                className="block w-full h-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;