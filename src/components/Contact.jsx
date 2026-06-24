function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-slate-300 text-base md:text-lg mb-10">
          Feel free to reach out for internships,
          collaborations, software development opportunities,
          or professional networking.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">

          <p className="text-base md:text-lg mb-6">
            📧 Email:
            <a
              href="mailto:amitkumar6203557885@gmail.com"
              className="text-blue-400 ml-2 break-all hover:text-blue-300"
            >
              amitkumar6203557885@gmail.com
            </a>
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amitkumar6203557885@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
            >
              Send Email
            </a>

            <a
              href="https://github.com/amit-kumar-2005"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-500 hover:border-blue-500 px-5 py-3 rounded-xl transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amit-kumar-46000b379"
              target="_blank"
              rel="noreferrer"
              className="border border-slate-500 hover:border-blue-500 px-5 py-3 rounded-xl transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;