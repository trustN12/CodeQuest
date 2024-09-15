// HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaYoutube, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Social Icons */}

      <div className="absolute top-5 right-5 flex space-x-6 text-2xl">
        <motion.a
          href="https://github.com/trustN12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-400 transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@algo-bot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
        >
          <FaYoutube />
        </motion.a>
        <motion.a
          href="mailto:academyshreyn12@gmail.com"
          className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="tel:+919679188394"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          variants={iconVariants}
          whileHover="hover"
        >
          <FaPhone />
        </motion.a>
      </div>

      {/* Floating glowing background effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-purple-700 opacity-20 rounded-full filter blur-3xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.8 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 opacity-20 rounded-full filter blur-3xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.8 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Title Animation */}
      <motion.h1
        className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600 drop-shadow-lg mb-16"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        CodeQuest
      </motion.h1>

      {/* Button Group */}
      <div className="flex space-x-12 z-10">
        {/* Quiz Button */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px 10px rgba(255, 105, 180, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="/quiz">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-lg shadow-lg transition-transform duration-300 hover:shadow-pink-600/50">
              Quiz Platform
            </button>
          </Link>
        </motion.div>

        {/* Code Editor Button */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px 10px rgba(0, 255, 255, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link to="/code-editor">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-2xl font-bold rounded-lg shadow-lg transition-transform duration-300 hover:shadow-teal-600/50">
             Code Editor 
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
