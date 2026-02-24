import React from 'react';
import { Calendar, Bell, FileText, ArrowRight } from 'lucide-react';

export function NewsSection() {
  const newsItems = [
    {
      title: 'Latest News',
      icon: <FileText className="w-6 h-6 text-[#D72A1D]" />,
      content: 'Department launches new AI specialization track for Fall 2026. Learn about the new curriculum changes.',
      date: 'Feb 15, 2026',
      link: '#'
    },
    {
      title: 'Event Update',
      icon: <Calendar className="w-6 h-6 text-[#D72A1D]" />,
      content: 'Join us for the annual Hackathon this Saturday in the Science Center. Registration is open until Friday.',
      date: 'Feb 12, 2026',
      link: '#'
    },
    {
      title: 'Important Notice',
      icon: <Bell className="w-6 h-6 text-[#D72A1D]" />,
      content: 'Course registration for the Spring semester begins next week. Make sure to consult with your advisor.',
      date: 'Feb 10, 2026',
      link: '#'
    }
  ];

  return (
    <section className="bg-[#F4EBE8] py-16 font-roboto border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-thin text-[#D72A1D] mb-12 tracking-wider uppercase border-b-2 border-[#D72A1D] inline-block pb-2">
          News / Announcements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#F4EBE8] rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-[#0A2342]">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {item.content}
                </p>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                <span className="text-sm text-gray-400 font-light">{item.date}</span>
                <a 
                  href={item.link} 
                  className="text-[#D72A1D] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm group"
                >
                  Read More <ArrowRight className="w-4 h-4 group-hover:text-[#D72A1D]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
