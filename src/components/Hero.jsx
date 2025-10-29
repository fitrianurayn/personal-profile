import React from "react";
import profile from "../assets/images/profile.jpg";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

function Hero() {

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-16 md:pt-24 border border-gray-200 bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF]"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[699px] px-6 md:px-12 lg:px-16 py-12 lg:py-0">
        {/* Profile Image - Show first on mobile, second on desktop */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0 lg:pr-[200px] lg:pb-[200px]">
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-[0_20px_50px_rgba(119,85,255,0.2)]">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 rounded-full opacity-50 bg-gradient-to-br from-[#FF54B0] via-[#7755FF] to-[#FFE978]"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 max-w-xl text-center lg:text-left order-2 lg:order-1">
          <p className="text-sm md:text-base font-medium mb-4 text-[#7755FF]">
            Hello, I'm
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-[#232946]">
            UI/UX Designer & Web&nbsp;Development
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-8 text-[#5A5F73]">
            passionate about creating intuitive digital experiences and continuously learning through projects. Open to collaboration opportunities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <button className="w-full sm:w-auto text-base md:text-lg text-white px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 bg-gradient-to-br from-[#7755FF] to-[#FF54B0]">
              See My Work
            </button>
            <button className="w-full sm:w-auto text-base md:text-lg px-6 py-3 rounded-lg font-medium transition-all border-2 border-[#7755FF] text-[#7755FF] bg-transparent hover:bg-white hover:bg-opacity-50">
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href="https://instagram.com/fitnurayn"
              className="transition-opacity hover:opacity-70 text-[#FF54B0]"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/fitrianurayn"
              className="transition-opacity hover:opacity-70 text-[#232946]"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/fitrianurayuni"
              className="transition-opacity hover:opacity-70 text-[#0077B5]"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:fitrianurayuni@gmail.com"
              className="transition-opacity hover:opacity-70 text-[#7755FF]"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;