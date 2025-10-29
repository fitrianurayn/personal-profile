import React, { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent! Thank you for contacting me.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-purple-50 px-6 md:px-20 lg:px-[272px] py-24 flex justify-center items-center min-h-[684px]"
      style={{ backgroundColor: "#F0E7FF" }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side - Contact Info */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-gray-900 mb-6">
            Contact Me
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            Interested working together? Let's talk about your project and make
            something amazing!
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-purple-600">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base md:text-lg">fitrianurayuni@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-purple-600">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm sm:text-base md:text-lg">+62 896-0191-4718</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/fitnurayn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/fitrianurayn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/fitrianurayuni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:fitrianurayuni@gmail.com"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
          <div className="space-y-5 sm:space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base md:text-lg"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base md:text-lg"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                rows="5"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none placeholder:text-gray-400 text-sm sm:text-base md:text-lg"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full text-white font-semibold py-3 sm:py-3.5 md:py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #7755FF 0%, #FF54B0 100%)",
              }}
            >
              Send Message
            </button>
          </div>
        </div>

          
      </div>
    </section>
  );
}

export default Contact;
