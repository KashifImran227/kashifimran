import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      description: "Description for Project 1.",
      image: "/card1.png", 
    },
    {
      title: "Project 2",
      description: "Description for Project 2.",
      image: "/card2.jpg",
    },
    {
      title: "Project 3",
      description: "Description for Project 3.",
      image: "/card3.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center my-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
