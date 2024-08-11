// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(each => ({title: each.title}))

  return (
    <div className="timeline-view-container">
      <h1 className="timeline-view-heading1">MY JOURNEY OF CCBP 4.0</h1>

      <div className="timeline-view-chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={items}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return (
                <div className="timeline-view-chrono-card-container">
                  <CourseTimelineCard data={each} />
                </div>
              )
            }
            return (
              <div className="timeline-view-chrono-card-container">
                <ProjectTimelineCard data={each} />
              </div>
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
