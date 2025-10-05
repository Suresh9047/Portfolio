import React from "react";

const Education = () => {
  return (
    <section
      className="relative pt-20 pb-20 bg-black overflow-hidden"
      data-name="Education & Career"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-4xl md:text-5xl relative inline-block pb-4 mb-4 section-title">
            Education & Career
          </h2>
          <p className="text-white text-lg md:text-xl">
            My academic journey and professional experience that shaped me as a software engineer.
          </p>
        </div>

        <div className="flex flex-col md:flex-col items-center gap-8">
          {/* Education */}
          <div className="flex items-center bg-white/5 rounded-lg p-6 w-full max-w-2xl">
            <div className="text-4xl font-bold text-white/10 mr-6">01</div>
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full text-white text-2xl mr-6">
              <i className="fa fa-graduation-cap"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                B.E - Computer Science & Engineering
              </h3>
              <p className="text-white/70 mb-1">
                Paavai Engineering College, CGPA: 7.9
              </p>
              <span className="text-white/70 text-sm">Graduated in 2025</span>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="flex items-center bg-white/5 rounded-lg p-6 w-full max-w-2xl">
            <div className="text-4xl font-bold text-white/10 mr-6">02</div>
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-full text-white text-2xl mr-6">
              <i className="fa fa-briefcase"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Junior Software Engineer
              </h3>
              <p className="text-white/70 mb-1">
                Currently working at Arffy Technologies
              </p>
              <span className="text-white/70 text-sm">Joined: January 2025 - Present</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Particles / Background Effects */}
      <div className="hidden lg:block absolute top-0 right-0 w-full h-full z-0">
        {/* Copy your particle-container div here if you want animated particles */}
      </div>
    </section>
  );
};

export default Education;
