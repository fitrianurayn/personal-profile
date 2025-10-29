import React from "react";
import { Mail, Phone, MapPin, Heart, Instagram, Github, Linkedin, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              Fitria<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Nur Ayuni</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating amazing digital experiences through design and development.
            </p>
            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/fitnurayn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/fitrianurayn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/fitrianurayuni"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>

              {/* Email */}
              <a
                href="mailto:fitrianurayuni@gmail.com"
                aria-label="Email"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">UI/UX Design</li>
              <li className="text-gray-400">Frontend Development</li>
              <li className="text-gray-400">Branding & Identity</li>
              <li className="text-gray-400">Design Graphic</li>
              <li className="text-gray-400">Web Applications</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 break-all">fitrianurayuni@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+62 896-0191-4718</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Sidoarjo, East Java, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} MyProfile. Made with{" "}
              <Heart className="w-4 h-4 inline text-pink-500 fill-pink-500" /> by Fitria Nur Ayuni
            </p>

            <div className="flex gap-6 text-sm">
              <button
                type="button"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                onClick={() => alert("Privacy Policy clicked")}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                onClick={() => alert("Terms of Service clicked")}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;