import React from 'react';
import { motion } from 'framer-motion';

const AllSkills = [
  {
    category: 'Data Analysis & Visualization',
    skills: [
      { name: 'Python (pandas, matplotlib, seaborn)', percentage: 70, description: 'Data manipulation, analysis, and visualization', color: '#3776AB' },
      { name: 'Excel', percentage: 60, description: 'Pivot tables, formulas, data cleaning', color: '#217346' },
      { name: 'Power BI', percentage: 75, description: 'Creating dashboards and visual reports', color: '#F2C811' },
      { name: 'SQL', percentage: 80, description: 'Extracting insights from relational databases', color: '#e38c00' }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML', percentage: 90, description: 'Structure and semantics for web content', color: '#e34f26' },
      { name: 'CSS', percentage: 85, description: 'Styling and layout for websites', color: '#264de4' },
      { name: 'JavaScript', percentage: 55, description: 'Dynamic interactions and logic for websites', color: '#f0db4f' },
      { name: 'React', percentage: 65, description: 'Building modern SPAs with components', color: '#61dbfb' },
      { name: 'Tailwind CSS', percentage: 85, description: 'Utility-first CSS framework for fast styling', color: '#38bdf8' },
      { name: 'Django', percentage: 55, description: 'Python web framework for backend development', color: '#092e20' }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', percentage: 70, description: 'Scripting, data analysis, automation', color: '#306998' },
      { name: 'Java', percentage: 75, description: 'OOP and backend logic', color: '#b07219' },
      { name: 'JavaScript', percentage: 55, description: 'Frontend and backend scripting', color: '#f0db4f' },
      { name: 'SQL', percentage: 80, description: 'Data querying and manipulation', color: '#e38c00' },
      { name: 'C', percentage: 65, description: 'Procedural programming and low-level logic', color: '#555555' }
    ]
  },
  {
    category: 'Desktop Development',
    skills: [
      { name: 'Tkinter', percentage: 70, description: 'Python library for building GUIs', color: '#4B8BBE' },
      { name: 'Java Swing', percentage: 70, description: 'Java toolkit for desktop applications', color: '#b07219' }
    ]
  },
  {
    category: 'Modeling & Conception',
    skills: [
      { name: 'UML Diagrams', percentage: 80, description: 'Class, sequence, and use-case diagrams', color: '#7e57c2' },
      { name: 'i*', percentage: 65, description: 'Goal-oriented modeling for requirements', color: '#ffb74d' },
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', percentage: 80, description: 'Version control and collaboration', color: '#24292e' },
      { name: 'Talend', percentage: 70, description: 'ETL and data integration tool', color: '#ff6d00' },
      { name: 'Docker', percentage: 50, description: 'Containerization of apps and services', color: '#2496ED' }
    ]
  }
];


const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="min-h-screen bg-gradient-to-r from-sky-900 via-slate-600 to-slate-600 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 w-full text-center">My Skills</h1>

      {AllSkills.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-200">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="relative flex flex-col items-center sm:flex-row bg-white text-black rounded-lg shadow-lg overflow-hidden p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 flex items-center justify-center rounded-full text-white font-bold"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name.charAt(0)}
                </motion.div>
                <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
                  <p className="text-xl font-semibold">{skill.name}</p>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                  <p className="mt-2 text-lg">{skill.percentage}%</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
