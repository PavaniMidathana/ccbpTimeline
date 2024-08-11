// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {data} = props
  const {description, projectTitle, imageUrl, duration, projectUrl} = data

  return (
    <>
      <img
        src={imageUrl}
        alt="projectImage"
        className="project-timeline-card-image"
      />
      <div className="project-timeline-card-heading-container">
        <h1 className="project-timeline-card-heading-container-h">
          {projectTitle}
        </h1>
        <p className="project-timeline-card-heading-container-p">
          <AiFillCalendar className="project-timeline-card-heading-container-p-icon" />{' '}
          {duration}
        </p>
      </div>
      <p className="project-timeline-card-description"> {description}</p>
      <a href={projectUrl} className="project-timeline-card-link">
        Visit
      </a>
    </>
  )
}

export default ProjectTimelineCard
