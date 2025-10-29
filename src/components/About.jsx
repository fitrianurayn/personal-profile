import React from "react";
import profile from "../assets/images/profile.jpg";

function About() {
  const CheckIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const SendIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );

  const skills = [
    { name: "UI/UX Design", color: "#7755FF" },
    { name: "Web UI Development", color: "#7755FF" },
    { name: "Branding", color: "#7755FF" },
    { name: "Design Graphic", color: "#7755FF" },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-[88px] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[232px] pt-[96px] pb-[96px]"
    >
      <div className="flex flex-row justify-center items-start gap-6 md:gap-8 lg:gap-12">
        {/* Left Side - Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(119,85,255,0.15)]">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 text-[#232946]">
            About Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6 lg:mb-8 text-[#5A5F73]">
            Hi! I'm Fitria Nur Ayuni, a UI/UX designer and web development based in Sidoarjo. As an Informatics Engineering student at at Surabaya State University , I design intuitive interfaces and build responsive web applications. Skilled in visual design, user flows, and web development. Always learning and open to internships or project collaborations!
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6 lg:mb-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg bg-[#F0E7FF] text-[#7755FF]"
              >
                <CheckIcon />
                <span className="text-xs md:text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Let's Connect Button */}
          <button className="text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium flex items-center gap-2 text-sm md:text-base transition-all hover:opacity-90 hover:shadow-lg bg-gradient-to-r from-[#7755FF] to-[#FF54B0]">
            <SendIcon />
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
