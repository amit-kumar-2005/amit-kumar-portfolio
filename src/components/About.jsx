function About() {
return ( <section
   id="about"
   className="bg-slate-900 text-white py-20"
 > <div className="max-w-6xl mx-auto px-6">


    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
      About Me
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      <div>
        <p className="text-slate-300 text-lg leading-8">
          I am <span className="text-blue-400 font-semibold">Amit Kumar</span>,
          currently pursuing a Master of Computer Applications (MCA)
          at Graphic Era University.

          I am passionate about Full Stack Development, Java Programming,
          Data Structures & Algorithms, and building real-world software
          applications that solve practical problems.

          My goal is to become a Software Engineer and contribute to
          innovative products through clean, scalable, and efficient code.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">

        <div className="bg-slate-800 p-5 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Education
          </h3>
          <p className="text-slate-300">
            MCA, Graphic Era University
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Specialization
          </h3>
          <p className="text-slate-300">
            Full Stack Development & Software Engineering
          </p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Interests
          </h3>
          <p className="text-slate-300">
            Java, DSA, Web Development, Problem Solving
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


);
}

export default About;
