import React from 'react';
import { motion } from 'framer-motion';
import AboutCanvas from './AboutCanvas';
import { Link } from 'react-router-dom';
// import Canvas from './Canvas';

function About({ variants, transitions }) {
  // const [page, setPage] = useState(null);
  // let location = useLocation();

  // useEffect( () => {
  //   console.log(location.pathname)
  //   setPage(location.pathname);
  //   console.log(page);
  // }, [location]);

  return (
    <motion.div id="about" className="container about"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <AboutCanvas />
      {/* <Canvas /> */}
      <div className="inner">
        <div className="details">
          <h1 id="about-heading" className="heading">I build functional & progressive websites.</h1>
          <p>My name is Colton Allen, and I am first and foremost a Web Developer.</p>
          <p>As an entrepreneur, owning and operating my own business for the past 12 years, I have picked up many skills and learned a lot. In the process, I, of course, had to create a website for my business, and I was captivated ever since.</p>
          <p>Business has been great, but the COVID-19 pandemic truly opened my eyes to the fact that my business was not foolproof. In desperate times, such as they were, business could fall flat in a moment’s time. This got me thinking and formulating another plan; a plan that is more stable for those I love.</p>
          <p>So, with the given extra time due to the pandemic, although difficult financially, I took to the Internet to pursue my passion — my true passion that’s been bubbling up beneath the surface.</p>
          <p>After several courses that I purchased and followed online, as well as endless hours of YouTube tutorials to accomplish projects that I was interested in, I am now looking to amalgamate into a team of fellow web enthusiasts.</p>
          <p>Utilizing modern programming languages such as HTML5, CSS3, and JavaScript in conjunction with various frameworks and libraries such as React, TypeScript, Sass, Bootstrap, jQuery, amongst others, I have built many of my own apps and websites that I now would like to do full time. That’s where you come in.</p>
          <p>If you haven’t already, check out a few of my projects <Link to="/work">here</Link>. If you like what you see, you can get my contact information or send me a message <Link to="/contact">here</Link>.</p>
          <p>Thank you very much for taking the time. I hope to get the opportunity to work with you.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
