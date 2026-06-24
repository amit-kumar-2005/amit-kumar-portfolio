function Projects() {
  const projects = [
    {
      title: "MediPredict AI: Heart Disease Prediction System",
      description:
        "Heart Disease Prediction System using Machine Learning and Flask for early risk assessment and prediction.",
      tech: "Python • Flask • Machine Learning",
      github:
        "https://github.com/amit-kumar-2005/MediPredict-AI-Heart-Disease-Prediction-System",
      demo: "#",
    },
    {
      title: "MediSlot-Pro: Patient Scheduling Management System",
      description:
        "Web-based appointment scheduling platform for patients and administrators.",
      tech: "React • Node.js • MongoDB",
      github: "#",
      demo: "#",
    },
    {
      title: "Hotel Booking Management System",
      description:
        "Full Stack application for hotel room booking, user authentication, and booking management.",
      tech: "React • Node.js • MongoDB",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React, Vite and Tailwind CSS.",
      tech: "React • Vite • Tailwind CSS",
      github: "#",
      demo: "https://amit-kumar-portfolio-five.vercel.app",
    },
    {
      title: "Trishul Homestay Direct Booking Engine",
      description:
        "Direct booking platform for homestays with responsive UI and booking workflow.",
      tech: "React • Node.js • MongoDB",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition duration-300 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5 leading-7">
                {project.description}
              </p>

              <p className="text-sm text-slate-400 mb-6">
                {project.tech}
              </p>

              <div className="flex flex-wrap gap-3">

                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="bg-slate-700 px-4 py-2 rounded-lg">
                    Coming Soon
                  </span>
                )}

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-slate-500 hover:border-blue-500 px-4 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;