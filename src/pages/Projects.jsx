import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import BackgroundAnimation from "../components/BackgroundAnimation";

const projects = [
  {
    title: "💪 Gym Management System",
    description: "Manage memberships, track workouts, and handle payments seamlessly. Built with React, Node.js, and MongoDB.",
    features: ["Membership Management", "Workout Tracking", "Payment Integration"],
    platform: "Web",
    liveLink: "https://lighthearted-vacherin-cbf54e.netlify.app/",
  },
  {
    title: "💬 Real-Time Chat App",
    description: "Engage in seamless real-time messaging with WebSockets and Firebase.",
    features: ["Real-Time Messaging", "User Authentication", "Media Sharing"],
    platform: "Mobile",
    liveLink: "https://chatapp-juac.onrender.com/",
  },
  {
    title: "🏫 Institute Management System",
    description: "Automate student admissions, fee payments, and academic tracking.",
    features: ["Student & Faculty Management", "Course Enrollment", "Fee Payment System"],
    platform: "Web",
    liveLink: "/enroll-now",
  },
  {
    title: "📰 News Website",
    description: "Stay updated with the latest news, categories, and real-time article updates.",
    features: ["Live News Updates", "Multi-Category Support", "Admin Dashboard"],
    platform: "Web",
    liveLink: "enroll-now",
  },
  {
    title: "🤖 AI Chatbot",
    description: "Automate conversations with an AI chatbot powered by Gemini API and the MERN stack.",
    features: ["AI-Powered Chat", "Natural Language Processing", "Customizable Responses"],
    platform: "Mobile",
    liveLink: "https://arvindkumar20.github.io/chat-Bot/",
  },
  {
    title: "🎓 Udemy Clone",
    description: "Build an online learning platform with course creation, payment gateways, and video hosting.",
    features: ["Course Creation & Management", "Secure Payment Integration", "Student Dashboard"],
    platform: "Web",
    liveLink: "enroll-now",
  },
  {
    title: "💼 Portfolio Website",
    description: "Showcase your skills, projects, and experience with a professional portfolio website.",
    features: ["Customizable UI", "Project Showcase", "Contact Form Integration"],
    platform: "Web",
    liveLink: "https://ubiquitous-lebkuchen-1c09ea.netlify.app/",
  },
  {
    title: "🖼️ Image Search Platform",
    description: "A smart image search platform that categorizes images based on user queries and AI tagging.",
    features: ["AI-Powered Image Recognition", "Category-Based Search", "High-Resolution Image Retrieval"],
    platform: "Web",
    liveLink: "https://arvindkumar20.github.io/Imagesearche/",
  }
];

const Projects = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const filteredProjects = selectedPlatform === "All" 
    ? projects 
    : projects.filter(project => project.platform === selectedPlatform);

const colors = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]; // Soft misty gray shades


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
         <BackgroundAnimation colors={colors}/>

      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-pulse">Transform Your Career with Real-World Projects</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Get hands-on experience by working on industry-grade projects. Gain expertise, boost your resume, and enhance your job opportunities.
      </p>

      <div className="mb-6">
        <label className="mr-4 font-semibold text-gray-900 dark:text-white">Filter by Platform:</label>
        <select
          className="p-2 rounded border dark:bg-gray-700 dark:text-white"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-left transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <ul className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {project.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <Link to={project.liveLink} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded hover:from-blue-600 hover:to-indigo-600 shadow-lg">
              Live Demo ➜
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
