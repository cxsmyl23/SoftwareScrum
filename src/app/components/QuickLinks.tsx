import React from 'react';
import { ChevronRight } from 'lucide-react';

export function QuickLinks() {
  const links = [
    { name: 'Course Catalog', href: '#' },
    { name: 'Student Resources', href: '#' },
    { name: 'University Homepage', href: '#' }
  ];

  return (
    <section className="bg-[#F4EBE8] py-16 font-roboto border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-thin text-[#0A2342] tracking-wide">
            Quick Links
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="flex items-center gap-2 text-lg font-light text-[#0A2342] hover:text-[#D72A1D] transition-colors group"
              >
                <div className="bg-[#D72A1D] rounded-full p-1 group-hover:bg-[#B52217] transition-colors">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
