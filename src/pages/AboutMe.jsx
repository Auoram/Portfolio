import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import HeroImg from '../assets/HeroBack.jpg'
import { motion } from "framer-motion"
import Skills from '../components/Skills/Skills';
import Hobbies from '../components/Hobbies/Hobbies';
import Contact from '../components/Contact/Contact';

const AboutMe = () => {
  const educationData = [
    {
      year: "2021",
      degree: "Baccalaureate in Mathematical Sciences B - French Option",
      institution: "EL MEHDI BENNOUNA high school, Tetouan",
      details: "",
    },
    {
      year: "2024",
      degree: "Bachelor's in mathematical and computer science",
      institution: "ABDELMALEK ESSÂADI University, Tetouan",
      details: "",
    },
    {
      year: "2026",
      degree: "Master's in Software Quality",
      institution: "ABDELMALEK ESSÂADI University, Tetouan",
      details: "",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar bgColor="bg-black/70" />
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${HeroImg})` }}>
      <div className="absolute inset-0 bg-black/50 sm:bg-transparent"></div>
      <div className="relative z-10 w-full sm:w-1/2 ml-auto flex flex-col justify-center h-full pl-24">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 lg:text-sky-900 text-white">
          About Me
        </h1>
        <p className="text-xl sm:text-2xl max-w-lg mb-6 lg:text-black text-white">
          A motivated data enthusiast with a strong foundation in web development.
          I enjoy exploring data to extract insights and build practical solutions.
        </p>
      </div>
      </div>
      <div className="bg-gradient-to-r from-sky-900 via-slate-600 to-slate-600 p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Education</h1>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="relative flex flex-col items-center text-center sm:text-left sm:flex-row">
            <div className="w-16 h-16 flex items-center justify-center bg-slate-400 text-white rounded-full text-xl font-bold mr-4">
              {edu.year}
            </div>
            <div className="bg-white text-black rounded-lg shadow-lg p-4 max-w-xs">
              <h2 className="text-xl font-semibold">{edu.degree}</h2>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-gray-600 mt-2">{edu.details}</p>
            </div>
            {index < educationData.length - 1 && (
              <div className="hidden sm:block h-1 w-16 bg-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </motion.div>
      <div className="w-2/4 h-1 bg-slate-400 mx-auto mt-20"></div>
    </div>
    <Skills/>
    <Hobbies/>
    <Contact/>
    </div>
  );
};

export default AboutMe;
