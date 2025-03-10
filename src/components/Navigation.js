import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} />
    ))}
    
  </motion.ul>
);
const itemIds = [0, 1, 2, 3];