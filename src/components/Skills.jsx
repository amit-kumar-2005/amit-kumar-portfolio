function Skills() {
const skills = [
"Java",
"C++",
"JavaScript",
"React",
"Node.js",
"Express.js",
"MongoDB",
"MySQL",
"Git",
"GitHub",
"Postman",
"DSA",
];

return ( <section
   id="skills"
   className="bg-slate-950 text-white py-20"
 > <div className="max-w-6xl mx-auto px-6">


    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
      Skills
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-slate-800 p-6 rounded-xl text-center font-medium hover:bg-blue-600 hover:-translate-y-2 transition duration-300 shadow-lg"
        >
          {skill}
        </div>
      ))}

    </div>

  </div>
</section>


);
}

export default Skills;
