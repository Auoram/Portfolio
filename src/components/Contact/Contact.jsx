import {FaGithub, FaEnvelope} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="flex justify-center gap-8">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="mailto:maroua.boumchich@etu.uae.ac.ma" className="text-3xl hover:text-sky-600">
          <FaEnvelope />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>Get in touch</p>
      </div>
    </div>
  );
};

export default Contact;
