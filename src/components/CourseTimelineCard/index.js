// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data

  return (
    <>
      <div className="course-timeline-card-section1">
        <h1 className="course-timeline-card-section1-h">{courseTitle}</h1>
        <p className="course-timeline-card-section1-p">
          <AiFillClockCircle className="course-timeline-card-section1-p-icon" />
          {duration}
        </p>
      </div>

      <p className="course-timeline-card-section2-p">{description}</p>
      <ul className="course-timeline-card-section2-ul-container">
        {tagsList.map(each => (
          <li className="course-timeline-card-section2-tag">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
