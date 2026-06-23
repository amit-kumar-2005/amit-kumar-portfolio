import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amit Kumar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
            Full Stack Developer | Java & DSA Enthusiast
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-8 max-w-xl">
            MCA student passionate about Full Stack Development,
            Java Programming, Data Structures & Algorithms,
            and building scalable software solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-slate-500 hover:border-blue-500 px-6 py-3 rounded-xl transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/amit-kumar-2005"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-blue-500 px-5 py-2 rounded-lg transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-46000b379"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-700 hover:border-blue-500 px-5 py-2 rounded-lg transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Amit Kumar"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;