export const Contact = () => {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center z-10 px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Feel free to reach out to me via LinkedIn or email. I'm always open to new opportunities, collaborations, or just a friendly chat!
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://www.linkedin.com/in/richardtran-1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              LinkedIn
            </a>
            <p className="text-gray-400 text-lg">
              Email: <span className="text-blue-500">richardtran201@gmail.com</span>
            </p>
          </div>
        </div>
      </section>
    );
  };