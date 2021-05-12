import React from 'react'

function ProjTechs({ project }) {
  return (
    <div className="techs">
      <h3>technologies:</h3>
      {project.techs.map((tech, i) => <img src={tech} alt={tech} key={i + 1} />)}
    </div>
  )
}

export default ProjTechs
