import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';

export function Footer() {

    const links = [
    { name: 'Course Catalog', href: 'https://www.smumn.edu/academics/course-catalogs/' },
    { name: 'Student Resources', href: 'https://studentservices.smumn.edu/' },
    { name: 'University Homepage', href: 'https://www.smumn.edu/' },
    { name: 'Career Services', href: 'https://www.smumn.edu/about/offices-services/career-services/' }
  ];
  return (
    <footer className="bg-[#0A2342] text-white font-roboto relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#D72A1D] via-[#6C8EAD] to-[#D72A1D]"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#6C8EAD] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D72A1D] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-[#D72A1D]" />
              <h3 className="text-xl font-medium tracking-wide">CS Department</h3>
            </div>
            <p className="text-sm font-light leading-relaxed opacity-80">
              Shaping the future of technology through innovative education, cutting-edge research, and a commitment to excellence in computer science.
            </p>
            <div className="pt-4">
              <p className="text-xs font-light opacity-60">Saint Mary's University of Minnesota</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium tracking-wide mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#6C8EAD]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                     key={index}
                    href={link.href}
                    className="text-sm font-light opacity-80 hover:opacity-100 hover:text-[#6C8EAD] transition-all group flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D72A1D] rounded-full group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium tracking-wide mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#6C8EAD]" />
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-[#D72A1D] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  <p>700 Terrace Heights</p>
                  <p>Winona, MN 55987</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-[#D72A1D] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:507-457-1600" className="text-sm font-light opacity-80 group-hover:opacity-100 hover:underline transition-all">
                  (507) 457-1600
                </a>
              </div>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-[#D72A1D] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:cs@smumn.edu" className="text-sm font-light opacity-80 group-hover:opacity-100 hover:underline transition-all">
                  cs@smumn.edu
                </a>
              </div>

             
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm font-light opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Saint Mary's University of Minnesota - Computer Science Department. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs font-light opacity-60">
              <a href="#" className="hover:opacity-100 hover:underline transition-all">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 hover:underline transition-all">Terms of Use</a>
              <a href="#" className="hover:opacity-100 hover:underline transition-all">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}