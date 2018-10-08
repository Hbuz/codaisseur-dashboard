import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function NextCourse({ nextCourses }) {

  console.log("NEXT COIRUUESUE: " + JSON.stringify(nextCourses))
  const date = nextCourses[0].date.split(" ")
  console.log("DATE: " + date)

  return (
    <div>
      <h2>Next Start Date</h2>
      <h3>{date[0]}</h3>
      <h3>{date[1]}</h3>
      <h4>Monday</h4>
      <hr />
      <h4>{nextCourses[0].type}</h4>
      <span>male: {nextCourses[0].maleParticipants}</span>
      <span> </span>
      <span>female: {nextCourses[0].femaleParticipants}</span>
      <h4>85% Full</h4>
      <hr />
      <h4>{nextCourses[1].type}</h4>
      <span>male: {nextCourses[1].maleParticipants}</span>
      <span> </span>
      <span>female: {nextCourses[1].femaleParticipants}</span>
      <h4>70% Full</h4>
    </div>)

  // <div>
  //   {console.log("PROPROPRO: " + JSON.stringify(nextCourses))}
  //   <h1>{`${nextCourse && nextCourse.date}: ${nextCourse && nextCourse.type}`}</h1>
  //   <h3>{`${nextCourse && nextCourse.maleParticipants}`}</h3>
  //   <h3>{`${nextCourse && nextCourse.femaleParticipants}`}</h3>
  // </div>)
}