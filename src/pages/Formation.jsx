import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";

const Courses = [
  {
    name: "TechFest 2024",
    role: "Speaker",
    description: "Delivered a talk on modern DevOps practices.",
    date: "March 2024",
  },
  {
    name: "AI Summit 2023",
    role: "Attendee",
    description: "Explored advancements in AI and participated in workshops.",
    date: "June 2023",
  },
];

const clubActivities = [
  {
    clubName: "Tech Innovators Club",
    position: "President",
    description: "Led various tech initiatives and organized hackathons.",
    date: "2021 - Present",
  },
  {
    clubName: "Coding Enthusiasts",
    position: "Member",
    description: "Participated in weekly coding challenges and mentorship programs.",
    date: "2019 - 2021",
  },
];

const Formation = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar bgColor="bg-black/70" />
      <div className="relative w-full h-screen bg-gradient-to-b from-sky-700 to-sky-950 flex items-center justify-center">
        <h1 className="text-6xl text-white font-bold" style={{ transform: "rotate(-5deg)" }}>
          Courses & Activities
        </h1>
      </div>

      {/* Conferences Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Courses</h2>
          <div className="space-y-8">
            {Courses.map((course, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold">{course.name}</h3>
                <p className="text-gray-600">{course.date}</p>
                <p className="text-gray-500 italic">{course.role}</p>
                <p className="mt-2">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Club Activities Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Club Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="p-6 bg-sky-100 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold">{activity.clubName}</h3>
                <p className="text-gray-500 italic">{activity.position}</p>
                <p className="text-gray-600">{activity.date}</p>
                <p className="mt-2">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
