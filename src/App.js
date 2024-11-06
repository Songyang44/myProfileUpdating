import React, { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainPage from "./components/mainpage/mainpage";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Services from "./components/services/services";
import { Navigation } from "./components/Navigation";
import { MenuToggle } from "./components/MenuToggle";
import { useDimensions } from "./components/use-dimensions";
import "./App.css";
import { ThemeProvider, useTheme } from "./components/themeprovider";
import { Button, Typography, Container, CssBaseline } from "@mui/material";

function ThemeToggle() {
  const { toggleTheme } = useTheme();
  // return <Button variant="contained" onClick={toggleTheme}>Toggle Theme</Button>;
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    toggleTheme();
  };

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function App() {
  const { theme } = useTheme(); // 获取当前的主题状态

  return (
    <>
      <CssBaseline /> {/* 应用全局样式 */}
      <Container className="themetext">
        <Typography  variant="h4" component="h1" gutterBottom>
          {theme === "light" ? "Light" : "Dark"} {/* 显示主题名称 */}
        </Typography>
        <ThemeToggle />
      </Container>
      <motion.div className="links">
        <Link to="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="services">Services</Link>
        <Link to="resume">Resume</Link>
      </motion.div>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation(); // 获取当前路径

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <Router>
        <App color="primary" />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}
