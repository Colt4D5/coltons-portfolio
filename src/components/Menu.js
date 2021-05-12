import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu({ toggle }) {
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

  return (
    <motion.div className="menu-overlay"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      onClick={toggle}
    >
      <div className="menu">
        <div className="close-btn-container">
          <FontAwesomeIcon className="close-menu" icon={faTimes} onClick={toggle} />
        </div>
        <div className="menu-item home">
          <Link to="/" onClick={toggle} className="menu-link">
            <h1>HOME</h1>
          </Link>
        </div>
        <div className="menu-item about">
          <Link to="/about" onClick={toggle} className="menu-link">
            <h1>ABOUT</h1>
          </Link>
        </div>
        <div className="menu-item work">
          <Link to="/work" onClick={toggle} className="menu-link">
            <h1>WORK</h1>
          </Link>
        </div>
        <div className="menu-item contact">
          <Link to="/contact" onClick={toggle} className="menu-link">
            <h1>CONTACT</h1>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Menu
