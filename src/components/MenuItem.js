import * as React from "react";
import { motion } from "framer-motion";
import MainPage from "./mainpage/mainpage";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const paths = ["/", "/projects", "/services", "/resume"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style}>
        {/* 修改为链接或文本 */}
        <Link to={paths[i]} style={{textDecoration:"none"}}>
          {["Home", "Projects", "Skills", "Resume"][i]}
        </Link>
      </div>
    </motion.li>
  );
};
