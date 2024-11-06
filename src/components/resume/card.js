import React from "react";
import { useState, useRef } from "react";
import { motion,AnimatePresence } from "framer-motion";
import "./resume.css";
import { initialTabs as tabs } from "./ingredients.js";
import "./card.css";


// 定义卡片的动画变体
const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  // hue 函数，用于生成 hsl 颜色值
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

export default function Card({ emoji, hueA, hueB }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="splash" style={{ background }} />
        <motion.div className="card" variants={cardVariants}>
          {emoji}
        </motion.div>
      </motion.div>
    );
  }
  
  // 食物数组，每个元素包含一个 emoji 和两个颜色的 hue 值
 