import { color, motion } from "framer-motion";
import BackgroundAnimation from "../components/BackgroundAnimation";
const colors = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]; // Soft misty gray shades

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
  >
    <BackgroundAnimation colors={colors}/>
    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-pulse">
      About URIdea
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
      We are dedicated to empowering final-Project with real-world project experience, hands-on training, and professional documentation.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🎯 Our Mission</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Helping students build industry-ready projects with the latest technologies and professional guidance.
        </p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">👨‍💻 About the Founder</h3>
        <p className="text-gray-600 dark:text-gray-300">
          I am a seasoned MERN Stack Developer and instructor with experience in building scalable applications and mentoring aspiring developers.
        </p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🚀 Technologies We Cover</h3>
        <p className="text-gray-600 dark:text-gray-300">
          MERN Stack (MongoDB, Express, React, Node.js), AI integration, cloud deployment, and modern web development.
        </p>
      </div>
      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">📢 Why Choose Us?</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Hands-on training, real-world projects, complete documentation, and career assistance to help you stand out.
        </p>
      </div>
    </div>
  </motion.div>
);

export default About;
