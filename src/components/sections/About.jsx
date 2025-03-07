export const About = () => {
  // Updated skill lists
  const frontendSkills = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Jest", "Playwright" ];
  const backendSkills = ["Node.js", "Express.js", "SQL", "MongoDB", "Postgres", "Prisma Studio", "OAuth", "JWT"];
  const toolsAndGeneral = ["Git", "CI/CD", "Agile", "C", "C++", "Java", "Python"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-400 mb-6">
            A highly motivated Computer Science graduate with a strong
            foundation in software development and a passion for creating
            innovative, user-centric solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-gray-400 text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-gray-400 text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools/General Skills */}
          <div className="rounded-xl p-6 mt-6 hover:translate-y-1 transition-all">
            <h3 className="text-gray-400 text-xl font-bold mb-4">Tools/General</h3>
            <div className="flex flex-wrap gap-2">
              {toolsAndGeneral.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-gray-400">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>
                <strong>B.S. in Computer Science</strong> - New Jersey Institute of Technology (2022-2024)
              </li>
              <li>
                <strong>A.S. in Computer Science</strong> - Hudson County Community College (2020-2022)
              </li>
              <li>
                Relevant Coursework: Data Structures & Algorithms, Machine Learning, Data Visualizations, Web Development, Java Programming, C++ Programming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};