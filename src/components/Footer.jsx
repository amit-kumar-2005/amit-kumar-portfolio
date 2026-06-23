function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-xl font-semibold text-white mb-2">
          Amit Kumar
        </h3>

        <p className="mb-4">
          Full Stack Developer | MCA Student | Java & DSA Enthusiast
        </p>

        <div className="flex justify-center gap-6 mb-4">

          <a
            href="https://github.com/amit-kumar-2005"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amit-kumar-46000b379"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

        </div>

        <p className="text-sm">
          © 2026 Amit Kumar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;