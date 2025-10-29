import React from "react";
import { ExternalLink, Figma } from 'lucide-react';
import desainBuku from "../assets/images/desain-buku.png";
import logoTPQ from "../assets/images/logo.png";
import mobileApp from "../assets/images/mobile-app.png";


function Portfolio() {
  const projects = [
  {
    title: "Book Design",
    description: "Prayer book design with a child-friendly appearance",
    image: desainBuku,
    category: "Design Graphic"
  },
  {
    title: "TPQ Baiturrahim Logo",
    description: "Logo design for TPQ Baiturrahim educational institution",
    image: logoTPQ,
    category: "Branding"
  },
  {
    title: "Mobile App UI/UX",
    description: "Intuitive interface design for mental health app",
    image: mobileApp,
    category: "UI/UX Design"
  },
];


  return (
    <section 
      id="portfolio" 
      className="w-full bg-transparent px-6 md:px-[100px] lg:px-[168px] pt-[87px] pb-[62px] flex justify-center items-start min-h-[700px] scroll-mt-[49px]"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Area */}
              <div
                className="h-48 md:h-56 relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl  font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

          ))}
        </div>

        {/* More on Figma Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button className="
            bg-gradient-to-r from-[#7755FF] to-[#FF54B0]
            hover:from-[#7755FF] hover:to-[#FF54B0]
            text-white font-semibold
            px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4
            text-sm sm:text-base
            rounded-full flex items-center gap-2
            shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105
          ">
            <Figma className="w-4 h-4 sm:w-5 sm:h-5" />
            More on Figma
          </button>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
