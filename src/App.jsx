import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import BackgroundAnimation from "./components/BackgroundAnimation";
import CourseLandingPage from "./pages/CourseLandingPage";
import EnrollmentForm from "./pages/EnrollMent";
import Services from "./pages/Services";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

function App() {
  const colors = ["#ff8c00", "#ff4500", "#ffa500", "#ff6347"]; // Autumn colors
  return (
    <ThemeProvider>
      <Router>
        <div className="relative flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-hidden">
          <Navbar />
          {/* Background Animation Effect */}
          <BackgroundAnimation colors={colors}/>

          <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
            <Routes>
              <Route
                path="/"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>}
              />
              <Route
                path="/about"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><About /></motion.div>}
              />
              <Route
                path="/pricing"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><CourseLandingPage /></motion.div>}
              />
              <Route
                path="/enroll-now"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><EnrollmentForm /></motion.div>}
              />
                <Route
                path="/services"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Services /></motion.div>}
              />

              <Route
                path="/projects"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Projects /></motion.div>}
              />
              <Route
                path="/contact"
                element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Contact /></motion.div>}
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
