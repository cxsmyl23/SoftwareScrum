import React from 'react';

const images = {
  degree: "https://images.unsplash.com/photo-1740065592671-9cb593ee9b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZGVncmVlJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NzEzNTEwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  courses: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzcxMzQ3NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  requirements: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGluJTIwbGFifGVufDF8fHx8MTc3MTM1MTA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

export function AcademicSection() {
  const sections = [
    {
      title: "Degree Programs",
      image: images.degree,
      description: "Explore our Bachelor of Science in Computer Science, with concentrations in Software Engineering, Data Science, and Cybersecurity.",
      link: "#"
    },
    {
      title: "Course Descriptions",
      image: images.courses,
      description: "From introductory programming to advanced algorithms, discover the range of courses designed to build your technical expertise.",
      link: "#"
    },
    {
      title: "Program Requirements",
      image: images.requirements,
      description: "Understand the core requirements, electives, and capstone projects needed to complete your degree successfully.",
      link: "#"
    }
  ];

  return (
    <section className="bg-white py-16 font-roboto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 aspect-video bg-gray-100 shadow-sm relative">
                {/* Image Placeholder Rectangle */}
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-thin text-[#0A2342] mb-4 group-hover:text-[#D72A1D] transition-colors duration-200">
                {section.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {section.description}
              </p>
              
              <div className="mt-auto">
                <span className="text-[#D72A1D] uppercase text-sm font-medium tracking-wide border-b border-transparent group-hover:border-[#D72A1D] transition-all">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
