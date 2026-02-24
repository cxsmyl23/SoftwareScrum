import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Apps', href: '#', active: false },
    { name: 'Course Files', href: '#', active: false },
    { name: 'Student Sites', href: '#', active: false },
    { name: 'About', href: '#', active: false },
    { name: 'PHP Site', href: '#', active: false },
  ];

  return (
    <header className="w-full font-roboto">
      {/* Top Bar */}
      <div className="bg-[#0A2342] text-white py-4 px-4 md:px-8 lg:px-12 w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="text-xl md:text-2xl font-thin tracking-wider">
            CS.SMUMN.EDU
          </div>
          <div className="text-sm md:text-base font-thin text-center md:text-right opacity-90">
            Saint Mary's University Computer Science Department
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#F4EBE8] border-b border-gray-200 relative">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-auto md:block">
             {/* Mobile Menu Button */}
             <div className="md:hidden text-[#0A2342] font-thin text-xl">
                Navigation
             </div>
             <button 
               className="md:hidden p-2 text-[#0A2342]"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>

             {/* Desktop Nav */}
             <nav className="hidden md:flex flex-wrap">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                   className={`
                     px-6 py-4 text-base font-thin tracking-wide transition-colors duration-200
                     ${link.active 
                       ? 'bg-[#D72A1D] text-white' 
                       : 'text-[#0A2342] hover:bg-[#E0D4D0] hover:text-[#D72A1D]'}
                   `}
                 >
                   {link.name}
                 </a>
               ))}
             </nav>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#F4EBE8] border-t border-gray-200 absolute w-full z-50 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  block px-6 py-4 text-base font-thin tracking-wide border-b border-gray-100
                  ${link.active 
                    ? 'bg-[#D72A1D] text-white' 
                    : 'text-[#0A2342] hover:bg-[#E0D4D0]'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
