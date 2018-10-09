import * as React from 'react'
import '../styles/nextCourse.css'


export default function NextCourse({ nextCourses }) {

  // console.log("NEXT COIRUUESUE: " + JSON.stringify(nextCourses))
  const date = nextCourses[0].date.split(" ")
  // console.log("DATE: " + date)

  return (
    <div className='course-container'>
      <div className='course-container--first'>
        <div className='header__container course-container__header--primary'>
          <h2>Next Start Date</h2>
        </div>
        <div className='date course-container__header--secondary'>
          <h3 className="date__month">{date[0]}</h3>
          <h3 className="date__day">{date[1]}</h3>
        </div>
        <div className='course-container__header--secondary--2'>
          <h4>Monday</h4>
        </div>
      </div>


      <div className='course-container--second'>
        
        <div className='course-container__header--tertiary'>
          <h4 className="course__type">{nextCourses[0].type + ':' }</h4>
        </div>

        <div className='course-container__textbox--gender'>
          <span className='gender--male'>male: {nextCourses[0].maleParticipants}</span>
          <span> </span>
          <span className='gender--female'>female: {nextCourses[0].femaleParticipants}</span>
        </div>
        <div className='course-container__capacity course-container__header--tertiary'>
          <h4 className="capacity">85% Full</h4>
        </div>
      </div>  

      
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
          <h4 className="capacity">70% Full</h4>
        </div>
      </div>
    </div>
  )
}




  {/* <div>
    {console.log("PROPROPRO: " + JSON.stringify(nextCourses))}
    <h1>{`${nextCourse && nextCourse.date}: ${nextCourse && nextCourse.type}`}</h1>
    <h3>{`${nextCourse && nextCourse.maleParticipants}`}</h3>
    <h3>{`${nextCourse && nextCourse.femaleParticipants}`}</h3>
  </div> */}
