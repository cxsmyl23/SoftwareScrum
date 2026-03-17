export function VideoBg() {
  return (
    <section className="relative text-white py-16 md:py-24 font-roboto overflow-hidden">

      {/* Background Video for the home page*/}
    <video
    autoPlay loop muted playsInline
    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
  >
    <source src="/assets/hero.mp4" type="video/mp4" />
  </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A2342]/70 -z-10"></div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight border-b border-white/20 pb-4 inline-block">
            Department Overview
          </h1>

          <p className="text-lg font-light leading-relaxed opacity-90">
            Our department is dedicated to providing students with a comprehensive understanding of computer science principles and practices.
          </p>

          <button  className="bg-[#D72A1D] text-white px-8 py-3 font-medium hover:bg-[#B52217] transition-colors rounded-sm shadow-sm">
            <a href="https://www.smumn.edu/degree/bachelors/computer-science/">Learn More</a>
          </button>
        </div>
      </div>

    </section>
  );
}