import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center h-screen pt-8 overflow-x-hidden bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: import.meta.env.VITE_ANIMATION_DURATION } }}
      ></motion.div>
    </>
  );
};

export default About;
