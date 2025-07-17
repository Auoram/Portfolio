import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const hobbies = [
  { name: 'Reading Manga/Manhua', description: 'Enjoying the visuals' },
  { name: 'Football', description: 'Watching Football matchs' },
  { name: 'Dancing', description: 'Enjoying movement and rhythm just at home' },
  { name: 'Reading Book Series', description: 'Escaping into stories and characters' },
  { name: 'Listening to music', description: 'Listening to different genres' },
  { name: 'Taking Care of myself', description: 'Staying healthy' },
];

const Hobbies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(hobbies.length / itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(hobbies.length / itemsPerPage)) % Math.ceil(hobbies.length / itemsPerPage));
  };

  const currentHobbies = hobbies.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 w-full text-center text-sky-900">My Hobbies</h1>

      <div className="flex justify-center items-center space-x-4 mb-8">
        <button
          className="text-4xl text-white"
          onClick={handlePrev}
        >
          <ChevronLeft size={32} className="p-2 bg-sky-900 rounded hover:bg-sky-700 transition" />
        </button>

        <div className="flex space-x-8">
          {currentHobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center bg-white text-black border border-black rounded-lg shadow-xl p-6 cursor-pointer hover:bg-sky-300 hover:text-white transition-all duration-300"
              whileHover={{
                scale: 1.05,
                rotate: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{hobby.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{hobby.description}</p>
            </motion.div>
          ))}
        </div>

        <button className="text-4xl text-white" onClick={handleNext} >
            <ChevronRight size={32} className="p-2 bg-sky-900 rounded hover:bg-sky-700 transition"/>
        </button>
      </div>
    </div>
  );
};

export default Hobbies;
