import React from "react";
import VideoPlayer from "../VideoPlayer"; // Import the VideoPlayer component

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1  gap-6">
          {/* Mechanic Service App */}
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 className="text-gray-400 text-xl font-bold mb-2">
              Mechanic Service App
            </h3>
            <p className="text-gray-400 mb-4">
              Built a React-Native mobile application allowing users to discover
              nearby mechanics and explore their available services using Google
              Maps API for real-time location tracking.
            </p>
            <div>
              {[
                "MongoDB",
                "Node.js",
                "React-Native",
                "Express.js",
                "OAuth",
                "Google Maps API",
                "Tailwind CSS",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                Demo
              </a>
            </div>
            <VideoPlayer src="/richard-tran-portfolio/videos/mechanic_app.mov" />
          </div>

          {/* Code Translation & Conversion Tool */}
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
          >
            <h3 className="text-gray-400 text-xl font-bold mb-2">
              Code Translation & Conversion Tool
            </h3>
            <p className="text-gray-400 mb-4">
              Led development of an innovative code translation tool integrating
              GPT-3 API, enabling seamless conversion of over 1,250 lines of
              code across multiple programming languages in a single operation
            </p>
            <div>
              {[
                "Node.js",
                "React",
                "Express.js",
                "SQLite",
                "dbAuth",
                "GPT-3 API",
                "Jest",
                "Tailwind CSS",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                Demo
              </a>
            </div>
            <VideoPlayer src="/richard-tran-portfolio/videos/code_translation_app.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
};
