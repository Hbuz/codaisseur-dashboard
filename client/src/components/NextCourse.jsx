import * as React from 'react'
import '../styles/nextCourse.css'
import moment from 'moment'


export default function NextCourse({ nextCourses }) {

  const date = moment.unix(nextCourses[0].date)
  const maxCapacityCode = 28
  const maxCapacityDesign = 15

  const calcPercentage = (students, maxCapacity) => Math.round((students*100)/maxCapacity)

  return (
    <div className='course-container'>
      <div className='course-container--first'>
        <div className='header__container course-container__header--primary'>
          <h2>Next Start Date</h2>
        </div>
        <div className='date course-container__header--secondary'>
          <h3 className="date__month">{date.format("MMM")}</h3>
          <h3 className="date__day">{date.format("MM")}</h3>
        </div>
        <div className='course-container__header--secondary--2'>
          <h4>Monday</h4>
        </div>
      </div>


      <div className='course-container--second'>

        <div className='course-container__header--tertiary'>
          <h4 className="course__type">{nextCourses[0].type + ':'}</h4>
        </div>

        <div className='course-container__textbox--gender'>
          <span className='gender--male'>male: {nextCourses[0].maleParticipants}</span>
          <span> </span>
          <span className='gender--female'>female: {nextCourses[0].femaleParticipants}</span>
        </div>
        <div className='course-container__capacity course-container__header--tertiary'>
          <h4 className="capacity">{calcPercentage(nextCourses[0].maleParticipants + nextCourses[0].femaleParticipants,
                                                    maxCapacityCode)}% Full</h4>
        </div>
      </div>

      {nextCourses[1] &&
        <div className='course-container--third'>
          <div className='course-container__header--tertiary'>
            <h4 className="course__type"> {'UI/UX ' + nextCourses[1].type + ':'}</h4>
          </div>
          <div className='course-container__textbox--gender'>
            <span className='gender--male'>male: {nextCourses[1].maleParticipants}</span>
            <span> </span>
            <span className='gender--female'>female: {nextCourses[1].femaleParticipants}</span>
          </div>
          <div className='course-container__capacity course-container__header--tertiary'>
            <h4 className="capacity">{calcPercentage(nextCourses[1].maleParticipants + nextCourses[1].femaleParticipants,
                                                    maxCapacityDesign)}% Full</h4>
          </div>
        </div>
      }
    </div>
  )
}