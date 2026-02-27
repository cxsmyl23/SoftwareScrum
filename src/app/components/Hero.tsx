import React from 'react';

export function Hero() {
  return (
    <section 
      className="bg-[#6C8EAD] text-white py-16 md:py-24 font-roboto relative bg-cover bg-center"
    
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0A2342]/70"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Centered Content */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight border-b border-white/20 pb-4 inline-block">
            Department Overview
          </h1>
          <p className="text-lg font-light leading-relaxed opacity-90">
            Our department is dedicated to providing students with a comprehensive understanding of computer science principles and practices. 
            From software engineering to data analytics, we offer a curriculum that prepares graduates for the challenges of the modern tech industry.
            Explore our programs and discover how you can shape the future of technology.
          </p>
          <button className="bg-[#D72A1D] text-white px-8 py-3 font-medium hover:bg-[#B52217] transition-colors rounded-sm shadow-sm">
            Testing Button
          </button>
        </div>
      </div>
    </section>
  );
}