import React from 'react'

function WorkList({ handler, list }) {

  return (
    <div className="projects">
      {list.map(proj => {
        return(
          <div key={proj.sys.id} className={`project ${proj.fields.dataset}`} data-index={proj.sys.id} onClick={handler}>
            <img src={proj.fields.image.fields.file.url} alt={`${proj.fields.dataset} project`} />
            <div className="tab">{proj.fields.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default WorkList
