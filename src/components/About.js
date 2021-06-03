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
          <h1 id="about-heading" className="heading">Front-End<br/>Web Developer.</h1>
          <p>Hello, and thank you for checking out my website. My name is Colton Allen, and I'll be your host today. I like coffee, Keanu Reeves movies, long walks to the coffee machine, and…</p>
          <p>Well, that's what I would say if I was trying to bore you, so I'll get right to the point. I am a passionate web developer with a propensity towards the Front-End Side of development with unrivaled drive and determination who is always striving to improve my skills with every opportunity.</p>
          <p>I am currently seeking a position as a Front-End Web Developer, and you are probably wondering what technologies I work with? They are as follows:</p>
          
          <h2>Base Languages:</h2>
          <div className="base_langs">
            <div className="lang_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/html-5.png" alt="HTML5 icon" />
              <h3>HTML5</h3>
            </div>
            <div className="lang_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/css3.png" alt="CSS3 icon" />
              <h3>CSS3</h3>
            </div>
            <div className="lang_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/javascript.png" alt="JavaScript icon" />
              <h3>JavaScript</h3>
            </div>
          </div>

          <h2>Frameworks:</h2>
          <div className="frameworks">
            <div className="frame_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/react-native.png" alt="ReactJS icon" />
              <h3>React</h3>
            </div>
            <div className="frame_card">
              <img className="lang_card_img" src="https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg" alt="Tailwind icon" />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="frame_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/sass.png" alt="Sass icon" />
              <h3>Sass</h3>
            </div>
            <div className="frame_card">
              <img className="lang_card_img invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="Next.js icon" />
              <h3>NextJS</h3>
            </div>
            <div className="frame_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/typescript.png" alt="TypeScript icon" />
              <h3>TypeScript</h3>
            </div>
            <div className="frame_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/bootstrap.png" alt="Bootstrap icon" />
              <h3>Bootstrap</h3>
            </div>
            <div className="frame_card">
              <img className="lang_card_img" src="https://img.icons8.com/color/85/000000/nodejs.png" alt="Node.js icon" />
              <h3>NodeJS</h3>
            </div>
          </div>


          <ul>
            <lh className="list_heading">Base Languages:</lh>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>

          {/* <p>My name is Colton Allen, and I am first and foremost a Web Developer.</p>
          <p>As an entrepreneur, owning and operating my own business for the past 12 years, I have picked up many skills and learned a lot. In the process, I, of course, had to create a website for my business, and I was captivated ever since.</p>
          <p>Business has been great, but the COVID-19 pandemic truly opened my eyes to the fact that my business was not foolproof. In desperate times, such as they were, business could fall flat in a moment’s time. This got me thinking and formulating another plan; a plan that is more stable for those I love.</p>
          <p>So, with the given extra time due to the pandemic, although difficult financially, I took to the Internet to pursue my passion — my true passion that’s been bubbling up beneath the surface.</p>
          <p>After several courses that I purchased and followed online, as well as endless hours of YouTube tutorials to accomplish projects that I was interested in, I am now looking to amalgamate into a team of fellow web enthusiasts.</p> */}
          <p>Utilizing modern programming languages such as HTML5, CSS3, and JavaScript in conjunction with various frameworks and libraries such as React, TypeScript, Sass, Bootstrap, jQuery, amongst others, I have built many of my own apps and websites that I now would like to do full time. That’s where you come in.</p>
          <p>If you haven’t already, check out a few of my projects <Link to="/work">here</Link>. If you like what you see, you can get my contact information or send me a message <Link to="/contact">here</Link>.</p>
          <p>Thank you very much for taking the time. I hope to get the opportunity to work with you.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
