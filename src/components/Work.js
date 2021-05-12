import React from 'react';
import { motion } from 'framer-motion';
// import Netflix from '../img/netflix-thumbnail.gif';
import WorkList from './WorkList';
import WorkCanvas from './WorkCanvas';

function Work({ variants, transitions, handler, loading, list, error }) {

  return (
    <motion.div id="work" className="container work"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <WorkCanvas />
      <div className="inner">
        <h1 className="heading">My Projects</h1>
        <p>I approach each project from a global scope, considering first what problem requires a solution</p>
        {loading && <div>loading projects...</div>}
        {list && <WorkList handler={handler} list={list} />}
        {error && <div>{error}</div>}

      </div>
    </motion.div>
  )
}

export default Work
