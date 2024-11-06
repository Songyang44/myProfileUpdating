// import React from "react";
// import { useState, useRef } from "react";
// import { motion,AnimatePresence } from "framer-motion";
// import "./resume.css";
// import { initialTabs as tabs } from "./ingredients.js";
// import Card from "./card.js";

// /**
//  * This is an example of layout animations in Framer Motion 2.
//  *
//  * It's as simple as adding a `layout` prop to the `motion.div`. When
//  * the flexbox changes, the handle smoothly animates between layouts.
//  *
//  * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
//  * animation is now fully compatible with user-set transforms.
//  */

// export default function Resume() {
//   const [isOn, setIsOn] = useState(false);

//   const toggleSwitch = () => setIsOn(!isOn);
//   const [isOpen, setIsOpen] = useState(false);

//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   const scrollRef = useRef(null)

//   const food = [
//     ["🍅", 340, 10],
//     ["🍊", 20, 40],
//     ["🍋", 60, 90],
//     ["🍐", 80, 120],
//     ["🍏", 100, 140],
//     ["🫐", 205, 245],
//     ["🍆", 260, 290],
//     ["🍇", 290, 320]
//   ];

//   return (
//     <>
//       <motion.div
//         layout
//         data-isOpen={isOpen}
//         initial={{ borderRadius: 50 }}
//         className="parent"
//         onClick={() => setIsOpen(!isOpen)}
//         animate={{ opacity: 0.5 }}
//         transition={{
//           opacity: { ease: "linear" },
//           layout: { duration: 0.3 },
//         }}
//         style={{ borderRadius: 20 }}
//       >
//         <motion.div layout className="child" />
//       </motion.div>
//       <motion.div layoutScroll style={{ overflow: "scroll" }} />

//       <div className="window">
//       <nav>
//         <ul>
//           {tabs.map((item) => (
//             <li
//               key={item.label}
//               className={item === selectedTab ? "selected" : ""}
//               onClick={() => setSelectedTab(item)}
//             >
//               {`${item.icon} ${item.label}`}
//               {item === selectedTab ? (
//                 <motion.div className="underline" layoutId="underline" />
//               ) : null}
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <main>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedTab ? selectedTab.label : "empty"}
//             initial={{ y: 10, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -10, opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             {selectedTab ? selectedTab.icon : "😋"}
//           </motion.div>
//         </AnimatePresence>
//       </main>
//     </div>
//     <div ref={scrollRef} style={{ overflow: "scroll" }}>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ root: scrollRef }}
//       />
//     </div>
//     <div>
//       {food.map(([emoji, hueA, hueB]) => (
//         <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
//       ))}
//     </div>
//     </>
//   );
// }

// const spring = {
//   type: "spring",
//   stiffness: 700,
//   damping: 30,
// };
// App.js
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./resume.css";

const pageVariants = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};

const Page1 = () => (
  <motion.div
    className="page"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <h2>Page 1</h2>
  </motion.div>
);

const Page2 = () => (
  <motion.div
    className="page"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <h2>Page 2</h2>
  </motion.div>
);

export default function App() {
  const [page, setPage] = useState(1);

  const togglePage = () => {
    setPage((prevPage) => (prevPage === 1 ? 2 : 1));
  };

  return (
    <div className="App">
      <button onClick={togglePage}>Toggle Page</button>
      <AnimatePresence mode="wait">
        {page === 1 ? <Page1 key="page1" /> : <Page2 key="page2" />}
      </AnimatePresence>
    </div>
  );
}
