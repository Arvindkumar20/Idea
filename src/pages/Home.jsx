import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Home = () => {

const colors = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]; // Soft misty gray shades

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
         <BackgroundAnimation colors={colors}/>

      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-pulse">
        Welcome to URIdea
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        Providing expert guidance on final-projects, from development to deployment, including detailed documentation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🚀 Full-Stack Project Development</h3>
          <p className="text-gray-600 dark:text-gray-300">Get hands-on experience with the latest technologies including MERN stack, AI, and cloud deployment.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">📄 Complete Documentation</h3>
          <p className="text-gray-600 dark:text-gray-300">Receive industry-standard project reports, synopsis, and presentation slides for your submission.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">📢 Live Training & Support</h3>
          <p className="text-gray-600 dark:text-gray-300">Join interactive training sessions with real-world case studies and mentor guidance.</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">💼 Career Assistance</h3>
          <p className="text-gray-600 dark:text-gray-300">Enhance your portfolio with real projects and boost your chances of landing a job or internship.</p>
        </div>
      </div>
      
      {/* Special Offer Section */}
      <div className="mt-8 p-6 bg-blue-600 dark:bg-blue-800 text-white rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold">🎉 Limited Time Offer!</h3>
        <p className="mt-2">Enroll now and get a free project consultation worth ₹2000! Offer valid for the first 50 students.</p>
      </div>
      {/* Call to Action */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">🚀 Get Started Today!</h3>
        <p className="text-gray-600 dark:text-gray-300">Book a free consultation and take the first step towards a successful project.</p>
        <Link to="/contact">
        <button className="mt-4 px-6 py-2 bg-green-600 dark:bg-green-700 text-white font-bold rounded-lg shadow-md hover:bg-green-700 dark:hover:bg-green-800 cursor-pointer">
          Contact Us Now
        </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
