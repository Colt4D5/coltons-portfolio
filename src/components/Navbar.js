import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // const [links, setLinks] = useState(null);
  const location = useLocation();
  
  // const handleClick = e => {
  //   const links = document.querySelectorAll('.nav-link');
  //   const target = e.target.closest('.nav-link');
  //   links.forEach(link => {
  //     link.classList.remove('active');
  //     target.classList.add('active');
  //   });
  // }

  const handleNavLinks = (navLinks) => {
    const path = location.pathname;
    const links = Array.from(navLinks);
    if (path === '/') links.find(link => link.classList.contains('home')).classList.add('active');
    if (path === '/about') links.find(link => link.classList.contains('about')).classList.add('active');
    if (path === '/work') links.find(link => link.classList.contains('work')).classList.add('active');
    if (path === '/contact') links.find(link => link.classList.contains('contact')).classList.add('active');
  }

  useEffect( async () => {
    const navLinks = document.querySelectorAll('.nav-link');
    await navLinks.forEach(link => {
      link.classList.remove('active');
    });
    handleNavLinks(navLinks);
  }, [location])

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="nav-link home">Home</Link></li>
          <li><Link to="/about" className="nav-link about">About</Link></li>
          <li><Link to="/work" className="nav-link work">Work</Link></li>
          <li><Link to="/contact" className="nav-link contact">Contact</Link></li>
        </ul>
        <a
            href="/assets/files/resume.pdf"
            target="_blank"
            className="resume_box"
            download
          ><FontAwesomeIcon icon={faDownload} id="download" />Resume</a>
      </nav>
    </header>
  )
}

export default Navbar
