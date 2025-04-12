import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EnrollmentForm = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    education: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, college, education, email } = formData;
    const mailtoLink = `mailto:arvindkumar8960905167@gmail.com?subject=New Enrollment&body=Name: ${name}%0D%0ACollege: ${college}%0D%0AEducation: ${education}%0D%0AEmail: ${email}`;
    window.location.href = mailtoLink;
navigate("/enroll-now");
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Enroll Now & Kickstart Your Journey 🚀
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Secure your spot today! Limited seats available.
      </p>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="education"
          placeholder="Education (e.g., B.Tech, MCA)"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all cursor-pointer"
        >
          Submit & Enroll
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
