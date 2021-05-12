import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);
  const [currentProj, setCurrentProj] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    const target = e.target.closest(".project");
    if (e.target.closest(".overlay") || e.target.closest(".close-btn")) setActive(false);
    if (!target) return;
    setCurrentProj(projectData[target.dataset.index]);
    setActive(true);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100%",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100%",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };

  useEffect(() => {
    fetch("projects.json")
      .then((res) => {
        if (!res.ok) throw Error("Could not find the projects");
        return res.json().then(data => {
        setLoading(false);
        const { projects } = data;
        setProjectData(projects);
        })
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Landing variants={pageVariants} transitions={pageTransition} />
            </Route>
            <Route path="/about">
              <About variants={pageVariants} transitions={pageTransition} />
            </Route>
            <Route path="/work">
              {projectData && <Work
                variants={pageVariants}
                transitions={pageTransition}
                handler={handleClick}
                active={active}
                loading={loading}
                list={projectData}
                error={error}
              />}
            </Route>
            <Route path="/contact">
              <Contact variants={pageVariants} transitions={pageTransition} />
            </Route>
          </Switch>
        </AnimatePresence>
        {currentProj && <Modal onClick={handleClick} handler={handleClick} active={active} currentProj={currentProj} />}
      </main>
    </div>
  );
}

export default App;
