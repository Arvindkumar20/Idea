import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";

const packages = [
  { id: 1, projects: 1, price: 2999, features: ["1 Real-World Project", "Source Code Access", "Basic Support", "Project Documentation", "Synopsis Included"] },
  { id: 2, projects: 2, price: 5499, features: ["2 Real-World Projects", "Source Code + Documentation", "Email Support", "Detailed Synopsis", "Project Report"] },
  { id: 3, projects: 3, price: 8499, bestValue: true, features: ["3 Real-World Projects", "Complete Project Guide", "Video Tutorials", "Priority Support", "Full Documentation & Synopsis", "Doubt Clearing Sessions"] },
  { id: 4, projects: 4, price: 9999, features: ["4 Real-World Projects", "Source Code + Documentation", "Doubt Clearing Sessions", "Complete Synopsis", "Technical Support"] },
  { id: 5, projects: 5, price: 11999, features: ["5 Advanced Projects", "Complete Code & Docs", "1-on-1 Mentorship", "Live Q&A Sessions", "Full Synopsis & Research Guide", "Internship Certificate"] },
  { id: 6, projects: "Documentation & Synopsis Only", price: 1999, features: ["Complete Documentation", "Synopsis for Submission", "Report Writing Guide", "Plagiarism-Free Content"] },
  { id: 7, projects: "Source Code Only", price: 2999, features: ["Fully Functional Source Code", "Code Explanation Guide", "Basic Support", "Deployment Assistance"] },
  { id: 8, projects: "Premium Custom Project", price: 20000, features: ["Bring Your Own Idea", "Full Development", "Custom Documentation & Synopsis", "1-on-1 Mentorship", "Deployment & Hosting Support", "Live Debugging Assistance", "Internship Certificate"] }
];

const colors = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]; // Soft misty gray shades


const CoursePackages = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-center">
    <BackgroundAnimation colors={colors}/>

      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Project-Based Learning Packages 🚀
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Master skills with real-world projects and get job-ready! Limited-time discount available.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map(({ id, projects, price, bestValue, features }) => (
          <motion.div
            key={id}
            className={`p-6 rounded-lg shadow-lg border dark:border-gray-700 bg-white dark:bg-gray-800 transition-all transform hover:scale-105 ${bestValue ? 'border-blue-500' : ''}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {projects} {typeof projects === 'number' && projects > 1 ? "Projects" : "Project"} Package
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {typeof projects === 'number' ? `Learn and build ${projects} real-world ${projects > 1 ? "projects" : "project"} with expert guidance.` : "Get specialized services for your needs."}
            </p>
            <ul className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold text-blue-600 mt-4">{typeof price === 'number' ? `₹${price}` : price}</p>
            {bestValue && (
              <p className="text-sm text-green-500 font-medium">Best Value! ⭐</p>
            )}
          <Link to={"/enroll-now"}>
          <button
              className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
            >
              Enroll Now
            </button></Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursePackages;