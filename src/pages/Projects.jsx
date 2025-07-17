import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProjectImg from "../assets/img2.jpg";
import Project1_Img1 from "../assets/PRJ1-1.png";
import Project1_Img2 from "../assets/PRJ1-2.png";
import Project1_Img3 from "../assets/PRJ1-3.png";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Modeling and development of a web application for child vaccination management",
    date: "2024",
    description: "This project involves the comprehensive modeling and development of a web-based application designed to facilitate the management of child vaccination schedules. The application aims to assist parents, healthcare personnel, and administrators in efficiently tracking vaccination records, scheduling appointments, and managing health information related to child immunizations.\nThe development process follows a structured approach beginning with a thorough analysis of functional and non-functional requirements, supported by detailed project planning illustrated through Gantt charts. Using UML and the Merise methodology, the system's architecture and behavior are modeled via use case diagrams, class diagrams, and detailed interaction scenarios involving various actors such as parents, medical staff, administrators, and visitors. The application features multiple user interfaces tailored to the needs of different user roles, including registration, authentication, profile management, vaccination scheduling, notifications, and administrative controls. The frontend is developed with modern web technologies, ensuring responsiveness and user-friendly navigation, while the backend supports secure data storage and retrieval. The system also incorporates tools for document management and communication, providing downloadable records and timely vaccination reminders to users. Throughout the project, best practices in software engineering, database design, and user experience have been applied to deliver a reliable and scalable solution aimed at improving public health management.",
    github: "https://github.com/Auoram/JakartaEE_pfe",
    image1: Project1_Img1,
    image2: Project1_Img2,
    image3: Project1_Img3
  },
  {
    name: "A Cabinet-doctor java project in swing",
    description: "A java project in swing that manage patients, doctors and appointments.",
    github: "https://github.com/Auoram/Java-miniProject",
  },
  {
    name: "Project 3",
    description: "This is the description of project 3. It includes details about the technologies used and the features implemented.",
    github: "https://github.com/yourusername/project3",
    image1: "https://via.placeholder.com/400x300",
  },
  {
    name: "Project 4",
    description: "This is the description of project 4. It includes details about the technologies used and the features implemented.",
    github: "https://github.com/yourusername/project1",
    image1: "https://via.placeholder.com/400x300",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar bgColor="bg-black/70" />
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${ProjectImg})` }}
      >
      </div>

      {/* Projects Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col lg:flex-row">
          {/* Project List */}
          <div className="lg:w-1/3 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${
                    selectedProject === index
                      ? "bg-sky-900 text-white"
                      : "hover:bg-sky-200"
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  {project.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Project Details */}
          <div className="lg:w-2/3 p-6">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">
                {projects[selectedProject].name}
              </h3>
              <h4 className="text-lg font-semibold mb-2">
                {projects[selectedProject].date}
              </h4>
              {projects[selectedProject].github && (
              <a
                href={projects[selectedProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-900 font-bold hover:underline mb-6 text-lg"
              >
                View on GitHub
              </a>)}
              <p className="text-gray-700 mb-4">
                {projects[selectedProject].description}
              </p>
              {projects[selectedProject].image1 && (
              <img
                src={projects[selectedProject].image1}
                alt={projects[selectedProject].name}
                className="w-full rounded mb-4"
              />)}
              {projects[selectedProject].image2 && (
              <img
                src={projects[selectedProject].image2}
                alt={projects[selectedProject].name}
                className="w-full h-1/2 rounded mb-4 mt-6"
              />)}
              {projects[selectedProject].image3 && (
              <img
                src={projects[selectedProject].image3}
                alt={projects[selectedProject].name}
                className="w-full h-1/2 rounded mb-4"
              />)}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
