import React, { useEffect } from 'react';
// import Netflix from '../img/netflix-thumbnail.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProjTechs from './Techs';
// import { motion } from 'framer-motion';

function Modal({ handler, active, currentProj }) {

  useEffect( () => {
    window.addEventListener('scroll', () => document.querySelector('.modal-container').style.top = window.scrollY)
  }, []);



  return (
      <div className={`modal-container ${active}`} >
        <div className="overlay" onClick={handler}></div>
        <div className="modal">
          <h1>{currentProj.fields.title}</h1>
          <a href={currentProj.fields.image.fields.url}><img src={currentProj.fields.image.fields.file.url} alt="Netflix Project" /></a>
          <p><strong>Challenges:</strong> {currentProj.fields.body.challenges}</p>
          <p><strong>What I learned:</strong> {currentProj.fields.body.learned}</p>
          <ProjTechs project={currentProj} />
          <FontAwesomeIcon className="close-btn" icon={faTimes} onClick={handler} />
        </div>
      </div>
  )
}

export default Modal
