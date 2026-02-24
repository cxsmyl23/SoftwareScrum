import React from 'react';

export function Footer() {
  const links = [
    { name: 'Course Catalog', href: '#' },
    { name: 'Student Resources', href: '#' },
    { name: 'University Homepage', href: '#' }
  ];

  return (
    <footer className="bg-[#721817] text-white py-12 font-roboto border-t border-[#8A2524]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center gap-6">
        <h3 className="text-xl font-thin tracking-wide mb-4 border-b border-white/20 pb-2">
          Quick Links
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-base font-light hover:text-gray-200 hover:underline transition-all opacity-90 hover:opacity-100"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-sm font-thin opacity-60">
          © {new Date().getFullYear()} Saint Mary's University of Minnesota - Computer Science Department
        </div>
      </div>
    </footer>
  );
}
