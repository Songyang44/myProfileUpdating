import React from "react";
import { motion } from "framer-motion";

const contentData = {
  experience: "Experience",
  education: "Education",
  hobbies: "Hobbies",
};
const Content = ({ id, onBack }) => (
  <motion.div
    className="content"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 20 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{contentData[id]}</h2>
    <button onClick={onBack}>Back</button>
  </motion.div>
);

export default Content;
