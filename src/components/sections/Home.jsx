export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <div
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 bg-cover bg-center border-4 border-blue-500/20"
          style={{ backgroundImage: "url('/richard-tran-portfolio/richardt.jpeg')" }} 
        ></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Richard Tran
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Hello! I’m a Software Engineer with expertise in full-stack
          development, API integration, and data analysis. I build scalable web
          and mobile apps using React, Node.js, and Python, focusing on
          intuitive user experiences and robust backend solutions. Skilled in
          agile collaboration, data-driven problem-solving, and delivering
          measurable results. Let’s connect!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};