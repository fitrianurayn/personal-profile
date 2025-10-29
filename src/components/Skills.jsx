import React from "react";
import { Pen, Code, Lightbulb, Palette } from 'lucide-react';

function Skills() {
  const skills = [
    {
      icon: <Pen className="w-10 h-10" />,
      title: "UI/UX Design",
      subtitle: "Figma",
      bgColor: "bg-purple-100",
      iconColor: "text-pink-500"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Frontend Dev",
      subtitle: "React, Tailwind",
      bgColor: "bg-blue-100",
      iconColor: "text-indigo-500"
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Branding",
      subtitle: "Logo, Identity",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Design Graphic",
      subtitle: "Canva",
      bgColor: "bg-indigo-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section 
      id="skills" 
      className="w-full flex items-center justify-center bg-white border-t border-gray-200 px-6 md:px-[208px] py-[80px] md:py-[96px] scroll-mt-[96px]"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10 md:mb-16">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[140px] sm:min-h-[160px] md:min-h-[180px]`}
            >
              {/* Icon */}
              <div className={`${skill.iconColor} mb-3 sm:mb-4`}>
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                {skill.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-medium text-gray-600">
                {skill.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
