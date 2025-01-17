import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"; // React Icons

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto p-8 bg-white rounded-2xl ">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Coming Soon!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-2s">
          We&apos;re working hard to bring you something amazing. Stay tuned for
          updates!
        </p>

        {/* Social media buttons with hover animations */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 flex-wrap">
          <a
            href="mailto:soumojitbanerjee22@gmail.com"
            className="p-4 sm:p-5 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 mb-4 sm:mb-0"
          >
            <FaEnvelope size={28} />
          </a>

          <a
            href="https://github.com/soumojit622"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 hover:scale-110 transition-all duration-300 mb-4 sm:mb-0"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/soumojit-banerjee-4914b3228/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 hover:scale-110 transition-all duration-300 mb-4 sm:mb-0"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://www.youtube.com/@soumojitbanerjee7273"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:scale-110 transition-all duration-300 mb-4 sm:mb-0"
          >
            <FaYoutube size={28} />
          </a>
        </div>

        {/* Footer with fade-in animation */}
        <p className="mt-8 text-sm sm:text-base text-gray-500 animate__animated animate__fadeIn animate__delay-3s">
          &copy; {new Date().getFullYear()} TULOS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
