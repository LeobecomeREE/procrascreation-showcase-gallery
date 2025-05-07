
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative">
      {/* Wave divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[60px] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* Main footer content with gradient background */}
      <div className="pt-16 pb-12 bg-gradient-to-br from-[#1A1F36] via-[#2D3250] to-[#1A1F36] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="logo-gradient w-10 h-10 flex items-center justify-center rounded-full mr-2 p-0.5">
                  <img 
                    src="/lovable-uploads/76d42db3-0485-4efc-a386-67dcd60ca676.png" 
                    alt="Procrascreation Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-playfair font-bold text-white">
                  Procras<span className="text-purple-300">creation</span>
                </h2>
              </div>
              <p className="text-gray-300 mb-4 max-w-xs">
                Handcrafted creations made with love and passion. Bringing your creative ideas to life.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/procrascreation"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white hover:text-purple-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-purple-200">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-purple-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-gray-300 hover:text-purple-300 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-purple-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-purple-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-purple-200">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  info@procrascreation.com
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  Follow us on Instagram
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-purple-200">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter to receive updates on new products and promotions.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 rounded-l-md py-2 px-4 bg-white/10 text-white border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button className="gradient-primary hover:opacity-90 text-white px-4 py-2 rounded-r-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} Procrascreation. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
