import React from "react";

const EducationCareer = () => {
  return (
    <section className="relative pt-24 pb-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-white font-bold text-4xl md:text-5xl relative inline-block pb-4 mb-4 section-title">
          Education & Career
        </h2>
        <p className="text-white text-lg md:text-xl">
          My academic journey and professional experience that shaped me as a software engineer.
        </p>
      </div>

      {/* Glowing underline bar */}
      <div
        className="h-1 w-3/4 mx-auto rounded-xl mb-12"
        style={{
          background: "linear-gradient(90deg, #FF6EC7, #6C63FF, #FF6EC7)",
          backgroundSize: "300% 100%",
          animation: "glow-move 3s linear infinite",
          boxShadow: "0 0 20px rgba(255, 110, 199, 0.7)",
        }}
      ></div>

      {/* Education & Career Cards */}
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
            <span className="text-white/70 text-sm">
              Joined: January 2025 - Present
            </span>
          </div>
        </div>
      </div>

      {/* Keyframes for glowing bar */}
      <style jsx>{`
        @keyframes glow-move {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationCareer;
