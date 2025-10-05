import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './css/ImageSlider.css';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';

// Dummy images as placeholders
const js = 'https://via.placeholder.com/150?text=JS';
const reactImg = 'https://via.placeholder.com/150?text=React';
const html = 'https://via.placeholder.com/150?text=HTML';
const css = 'https://via.placeholder.com/150?text=CSS';
const django = 'https://via.placeholder.com/150?text=Django';
const pythonImg = 'https://via.placeholder.com/150?text=Python';
const mysql = 'https://via.placeholder.com/150?text=MySQL';
const github = 'https://via.placeholder.com/150?text=GitHub';
const devops = 'https://via.placeholder.com/150?text=DevOps';
const k8s = 'https://via.placeholder.com/150?text=K8s';
const linux = 'https://via.placeholder.com/150?text=Linux';
const nestjs = 'https://via.placeholder.com/150?text=NestJS';
const api = 'https://via.placeholder.com/150?text=API';
const selenium = 'https://via.placeholder.com/150?text=Selenium';
const automation = 'https://via.placeholder.com/150?text=Automation';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const skillsData = [
    { name: 'MySQL', image: mysql },
    { name: 'Python', image: pythonImg },
    { name: 'Django', image: django },
    { name: 'JavaScript', image: js },
    { name: 'React', image: reactImg },
    { name: 'HTML', image: html },
    { name: 'CSS', image: css },
    { name: 'GitHub', image: github },
    { name: 'DevOps', image: devops },
    { name: 'Kubernetes', image: k8s },
    { name: 'Linux', image: linux },
    { name: 'NestJS', image: nestjs },
    { name: 'API Integrations', image: api },
    { name: 'Selenium', image: selenium },
    { name: 'Automation', image: automation },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="pt-24 pb-24 bg-gradient-to-b from-black to-gray-900">
      {/* Skills Header */}
      <div className="skills text-center mb-12">
        <h1 className="text-white text-4xl md:text-5xl flex items-center justify-center gap-4">
          <MdOutlineStarBorderPurple500 className="text-pink-500" style={{ fontSize: "60px" }} /> 
          My Skills
        </h1>
      </div>

      {/* Skills Slider */}
      <div className="Skills-learn container mx-auto">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div key={index} data-aos="fade-up" className="flex flex-col items-center">
              <div className="skills-img mb-4">
                <img src={skill.image} alt={skill.name} className="w-24 h-24 object-contain" />
              </div>
              <div className="skillnames">
                <h5 className="text-white text-lg font-medium">{skill.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageSlider;
