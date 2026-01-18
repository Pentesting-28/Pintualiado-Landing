import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#333333] py-[15px] border-t border-[#444444]">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Left Side: Copyright and Creator Info */}
          <div className="text-white text-[13px] font-roboto font-normal flex flex-wrap justify-center md:justify-start items-center gap-1">
            <span>© {currentYear} Manpica. Todos los derechos reservados.</span>
            <span className="hidden md:inline">Creado por:</span>
            <a 
              href="https://www.legmarketing305.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FFED00] hover:underline transition-all duration-300"
            >
              www.legmarketing305.com
            </a>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/Manpicave-183242275738251/?ref=pages_you_manage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFED00] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} fill="currentColor" strokeWidth={0} />
            </a>
            <a 
              href="https://www.instagram.com/manpicave/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFED00] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.youtube.com/@manpicaven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFED00] transition-colors duration-300"
              aria-label="Youtube"
            >
              <Youtube size={16} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;