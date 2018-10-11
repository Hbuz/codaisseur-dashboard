import * as React from 'react'
import '../styles/nextCourse.css'
import moment from 'moment'
import maleIcon from '../assets/upComingClasses/Frame 2 (7).png'
import femaleIcon from '../assets/upComingClasses/Frame (2).png'

export default function NextCourse({ nextCourses }) {

  const date = moment.unix(nextCourses[0].date)
  const maxCapacityCode = 28
  const maxCapacityDesign = 15

  const calcPercentage = (students, maxCapacity) => Math.round((students*100)/maxCapacity)

  return (
    <div className='course-container'>

        {/* first block of the component */}
      <div className='course-container--first'>
        <div className='course-container__header--primary'
        >
      
          <h2 className="">Next Start Date</h2>

        </div>
      </div>

        {/* second block of the component */}
      <div className='course-container--second'>
        <div className='date course-container__header--secondary'>
          <h3 className="date__month">
            {date.format("MMMM")}
          </h3>
          <h3 className="date__day">
            {date.format("MM")}
          </h3>
        </div>
        <div className='course-container__header--secondary-sub'>
          <h4>Monday</h4>
        </div>
      </div>

        {/* third block of the component */}
      <div className='course-container--third'>

        <div className='sub__grid-1'>
          <h4 className="course__type">
            {nextCourses[0].type + ':'}
          </h4>
        </div>
        
        <div className='sub__grid-2'>
          <img  className="male-female-icons" 
                src={maleIcon} 
                alt=''
          />
        </div>

          
        <div className='sub__grid-3'>
          <div className='participants'>
          {nextCourses[0].maleParticipants}
          </div>
        </div>

        <div className='sub__grid-4'>
          <img src={femaleIcon}  className="male-female-icons" alt=''/>
        </div>

        <div className='sub__grid-5'>
          <div className='participants'>
          {nextCourses[0].femaleParticipants}
          </div>
        </div>

        <div className= 'sub__grid-6'>
          <div className="capacity__container">
            <h4 className="capacity">
              { calcPercentage(nextCourses[0].maleParticipants
                            + nextCourses[0].femaleParticipants,
                              maxCapacityCode
                              )}
                              % Full
            </h4>
          </div>
        </div>
      </div>

         {/* fourth block of the component */}
      {nextCourses[1] &&
      <div className='course-container--third'>

        <div className='sub__grid-1'>
          <h4 className="course__type">
            {nextCourses[1].type + ':'}
          </h4>
        </div>

        <div className='sub__grid-2'>
          <img  className="male-female-icons" 
                src={maleIcon} 
                alt=''
          />
        </div>


        <div className='sub__grid-3'>
          <div className='participants'>
          {nextCourses[1].maleParticipants}
          </div>
        </div>

        <div className='sub__grid-4'>
          <img  src={femaleIcon}  
                className="male-female-icons" 
                alt=''
          />
        </div>

        <div className='sub__grid-5'>
          <div className='participants'>
          {nextCourses[1].femaleParticipants}
          </div>
        </div>

        <div className= 'sub__grid-6'>
          <div className="capacity__container">
            <h4 className="capacity">
              { calcPercentage(nextCourses[1].maleParticipants
                            + nextCourses[1].femaleParticipants,
                              maxCapacityCode
                              )}
                              % Full
            </h4>
          </div>
        </div>
        </div>
      }
    </div>
  )
} 
