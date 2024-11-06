import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./skillcard.css";
import { AnimatePresence } from "framer-motion";

function SkillCard({ title, description, customClass, number, items,item }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    // <motion.div
    // className={`service-card ${customClass}`}
    //   whileHover={{ scale: 1.05,opacity:1 }}
    //   initial={{ opacity: 0.9 }}

    // >
    //   <motion.div className="card-header" whileHover={{ color: "#00FF00" }}>
    //     <motion.span className="card-number" whileHover={{ color: "#00FF00" }}>
    //       {number}
    //     </motion.span>
    //     <motion.span
    //       className="card-icon"
    //       whileHover={{ backgroundColor: "#00FF00", rotate: 360 }}
    //     >
    //       {/* ➔ */}
    //       :D
    //     </motion.span>
    //   </motion.div>
    //   <div className="card-body">
    //     <motion.h3 className="card-title" whileHover={{ color: "#00FF00" }}>
    //       {title}
    //     </motion.h3>
    //     <p className="card-description">{description}</p>
    //   </div>
    // </motion.div>

    <>
      {/* {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}

export default SkillCard;
