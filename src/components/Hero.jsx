import styles from "../style";
import suresh from "../assets/suresh.jpeg"; 
import ExperienceDesign from "./ExperienceDesign";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
     <div>
    <section
      id="home"
      className={`flex flex-col md:flex-row items-center justify-center ${styles.paddingY} gap-10 md:gap-20`}
    >
      {/* LEFT SIDE - TEXT CONTENT */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-[600px] w-full px-4 md:px-0 ml-[160px]">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight md:leading-[80px]">
          Hi, I'm <span className="text-gradient italic">Suresh E</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-dimWhite">
          Full Stack Developer specializing in modern web & backend technologies. 
          I build scalable, performant applications using{" "}
          <span className="text-white font-semibold">
            React, Tailwind CSS, Bootstrap, Node.js, FastAPI, NestJS, Kubernetes, DevOps
          </span>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full">
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-white font-medium border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 flex justify-center w-full">
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
          <img
            src={suresh}
            alt="Suresh E"
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-gradient-to-r from-pink-500 to-blue-500 animate-fadeIn"
          />
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-pink-500 to-blue-500 animate-glow"></div>
        </div>
      </div>
      
    </section>

   <ExperienceDesign/>

   <ImageSlider/>
   </div>

  );
};

export default Hero;
