import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";

const services = [
  {
    title: "📱 Mobile & Web App Development",
    description: "Build high-performance web and mobile applications tailored to your business needs using modern technologies like MERN stack, React Native, and Flutter.",
    icon: "📱",
  },
  {
    title: "💡 AI & Machine Learning Solutions",
    description: "Leverage AI-powered solutions, including chatbots, predictive analytics, and computer vision, to automate and optimize business processes.",
    icon: "🤖",
  },
  {
    title: "🛒 E-Commerce Development",
    description: "Create powerful online stores with secure payment gateways, inventory management, and a seamless user experience.",
    icon: "🛍️",
  },
  {
    title: "🚀 SaaS Product Development",
    description: "Transform your idea into a full-fledged Software-as-a-Service (SaaS) platform with robust architecture and scalability.",
    icon: "⚙️",
  },
  {
    title: "🔐 Custom Software & Security Solutions",
    description: "Get tailor-made software with strong security measures, ensuring your business data remains protected.",
    icon: "🔐",
  },
  {
    title: "🎨 UI/UX & Branding",
    description: "Enhance your digital presence with stunning UI/UX design, ensuring high user engagement and brand recognition.",
    icon: "🎨",
  }
];

const colors = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]; // Soft misty gray shades

const Services = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
  >
    <BackgroundAnimation colors={colors}/>

    <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Empower Your Business with Our Software Services</h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">We specialize in cutting-edge software solutions that help businesses thrive in the digital world.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div 
          key={index} 
          className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md text-left transform hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">{service.icon} {service.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3">{service.description}</p>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-12">
      <Link 
        to="/contact" 
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded text-lg shadow-lg hover:from-blue-600 hover:to-indigo-600"
      >
        Get a Free Consultation ➜
      </Link>
    </div>
  </motion.div>
);

export default Services;
