import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Create the mailto link
    const mailtoLink = `mailto:arvindkumar8960905167@gmail.com?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Auto-send a thank-you email back to the student
    const welcomeMail = `mailto:${email}?subject=Welcome to URIdea&body=Hello ${name},%0D%0A%0D%0AThank you for reaching out to us! We will get back to you soon.%0D%0A%0D%0ARegards,%0D%0AURIdea`;

    setTimeout(() => {
      window.location.href = welcomeMail;
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    }, 1000);
  };
const colors = ["#d1d5db", "#9ca3af", "#6b7280", "#4b5563"]; // Soft misty gray shades


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
         <BackgroundAnimation colors={colors}/>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center"
      >
        Contact Us 🚀
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-300 text-center">
        Get in touch for **project inquiries and exclusive training sessions.**
      </p>
      
      {/* Special Offer to Attract Students */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-center text-lg text-blue-500 font-semibold mt-3"
      >
        🎉 Get a **FREE Consultation** when you contact us today!
      </motion.p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.05 }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
          required
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition-all"
        >
          📧 Send Message
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600 dark:text-gray-300">Or reach us via:</p>
        <p className="text-gray-900 dark:text-white font-medium">📞 +91 8960905167</p>

        {/* Social Media Links with Hover Effects */}
        <motion.div className="flex justify-center gap-4 mt-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.linkedin.com/in/arvind-kumar-1466812b1"
            target="_blank"
            className="text-blue-600"
          >
            <FaLinkedin size={32} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.instagram.com/apnacoder03/"
            target="_blank"
            className="text-pink-500"
          >
            <FaInstagram size={32} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://twitter.com/@Arvind827502"
            target="_blank"
            className="text-blue-400"
          >
            <FaTwitter size={32} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://github.com/Arvindkumar20"
            target="_blank"
            className="text-gray-900 dark:text-white"
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.facebook.com/profile.php?id=61568258787990"
            target="_blank"
            className="text-blue-700"
          >
            <FaFacebook size={32} />
          </motion.a>
        </motion.div>

        {/* Location Link with Animation */}
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="mt-4 text-gray-900 dark:text-white font-medium"
        >
          <a
            href="https://www.google.com/maps?q=Maikale, WX28+QH4, Vivekanand Puram, Kalyanpur, Lucknow, Uttar Pradesh 226022,India"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500"
          >
            📍 Location
          </a>
        </motion.p>
      </div>

      {/* Trust & Credibility Statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center text-sm text-gray-500 mt-6"
      >
        ✅ Trusted by **students** for top-notch training & development. **Join us now!**
      </motion.p>
    </motion.div>
  );
};

export default Contact;
