import React from "react";
import "./mainpage.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function MainPage() {
  const [isVisible, setIsVisible] = useState(true);
  const fileUrl = "/CV.pdf";
  const openFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=100090510101552");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/ria.n_n.ait/");
  };
  const openRedbook = () => {
    window.open(
      "https://www.xiaohongshu.com/user/profile/64793ae2000000001001f7e2"
    );
  };

  const title = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.civ
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.5,
            }}
          >
            <motion.div
              className="titlediv"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 5,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <p>Software Engineer</p>
            </motion.div>

            <motion.div
              className="text1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <h1>Hello, I'm</h1>
            </motion.div>
            <motion.div
              className="text2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <h1>Rian</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <p className="selfintroduce">
                A graduated software engineer who has a can-do attitude is
                looking for an opportunity to bring my enthusiasm for IT into a
                career.
              </p>
            </motion.div>
            <motion.div
              className="btns"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <button className="cvdownload">
                <a className="downloadlable" href={fileUrl} download="CV.pdf">
                  Download CV
                </a>
              </button>
              <button className="facebook" onClick={openFacebook}>
                F
              </button>
              <button className="instagram" onClick={openInstagram}>
                I
              </button>
              <button className="redbook" onClick={openRedbook}>
                R
              </button>
            </motion.div>

            <motion.div
              class="rotating-ring"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.5, 1, 0],
              }}
            >
              <img className="proimage" src="homepage.png" />
            </motion.div>
          </motion.civ>
        )}
      </AnimatePresence>
    </>
  );
}
export default MainPage;
