import React, { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";
import profile from "../assets/images/profile.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 120; // offset untuk tinggi navbar

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalankan sekali saat load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[88px] px-6 md:px-12 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-[#232946]">MyProfile</h1>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex items-center gap-10 text-base font-medium text-[#232946]">
          {["about", "skills", "portfolio", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`hover:opacity-70 transition ${
                  activeSection === item
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7755FF] to-[#FF54B0] font-semibold"
                    : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Hire Me */}
        <button className="hidden lg:flex text-white px-5 py-2.5 rounded-lg items-center gap-2 transition-all hover:opacity-90 font-medium bg-gradient-to-r from-[#7755FF] to-[#FF54B0]">
          <Send size={18} />
          Hire Me
        </button>

        {/* Menu Mobile Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#232946] focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } border-t border-gray-200 bg-white`}
      >
        <ul className="flex flex-col gap-4 px-6 md:px-12 lg:px-16 py-6">
          {["about", "skills", "portfolio", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium hover:opacity-70 ${
                  activeSection === item
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#7755FF] to-[#FF54B0]"
                    : "text-[#232946]"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button className="w-full text-white px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium hover:opacity-90 transition-all bg-gradient-to-r from-[#7755FF] to-[#FF54B0]">
              <Send size={18} /> Hire Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
