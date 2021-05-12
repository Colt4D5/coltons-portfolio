import React from 'react';
import profile from '../img/profile.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Canvas from './Canvas';

function Landing({ variants, transitions }) {

  return (
    <motion.div className="container landing active"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <Canvas />
      <div className="inner">
        <div className="greeting">
          <h1>Hi, my name is Colton Allen</h1>
          <h2>Front-End<br />Web Developer</h2>
          <p>I am an enthusiastic Web Developer seeking to push the boundaries of the web.</p>
          <p>Check out some of my work <Link to="/work">here</Link> or shoot me an email <Link to="/contact">here</Link>.</p>
          <p>Let's Design the Web Together!</p>
          <p className="learn-more"><Link to="/about">Learn more about Colton<FontAwesomeIcon className="chevron" icon={faChevronRight} /></Link></p>
        </div>
        {/* <img src={profile} alt="Profile pic" /> */}
      </div>
    </motion.div>
  )
}

export default Landing
