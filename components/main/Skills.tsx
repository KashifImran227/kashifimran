import { SparklesIcon } from "lucide-react"; // Ensure the import is correct
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // Animation variants for fade-in effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    {
      name: "React",
      description:
        "Proficient in creating user interfaces using ReactJS and Next.js.",
    },
    {
      name: "Next.js",
      description:
        "Experienced in server-side rendering and static site generation.",
    },
    {
      name: "JavaScript",
      description: "Skilled in writing clean and efficient JavaScript code.",
    },
  ];

  return (
    // Section with fade-in animation and grid layout for skills
    <>
    
      <section className="py-20 bg-gray-900 text-white h-full">
        <h2 className="text-4xl font-bold text-center mt-14">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-36">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }} // staggered animation
              className="flex flex-col items-center bg-gray-800 p-5 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <SparklesIcon className="h-10 w-10 text-yellow-500 mb-2" />
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
