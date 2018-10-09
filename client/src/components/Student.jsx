import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import hiredStamp from '../assets/students/Hired Stamp.png'

export default function Student({ student }) {
  return (<div>
    {student && student.status === 'hired' &&
      <div className="hired-conditional-render">
        <img src={hiredStamp} alt=''/>
      </div>
    }
    <Grid container direction="column" alignItems="center"   >
      <Grid item>
        {student && student.gender === "M" &&
          <img style={{ marginTop:"2vh",  height: "20vh", width: "20vh" }} src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png" />
        }
        {student && student.gender === "F" &&
          <img style={{ marginTop:"2vh", height: "20vh", width: "20vh"}} src="https://cdn3.iconfinder.com/data/icons/project-management-1-3/128/43-512.png" />
        }
      </Grid>
      <Grid item style={{backgroundColor: "#E94C4C", width: "100%", textAlign: "center", color: "white"}}>
        <h3>{student && `${student["name"]}`}</h3>
      </Grid>
      <Grid item style={{color: "#D32F2F"}}>
        <h4 style={{ marginLeft:"1vh"}}>"{student && `${student.description}`}"</h4>
      </Grid>
    </Grid>

    {/* <div alignItem="center">
      {student && student.gender === "M" &&
        <img style={{height: "85%", width: "85%"}} src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png" />
      }
      {student && student.gender === "F" &&
        <img style={{height: "85%", width: "85%"}} src="https://cdn3.iconfinder.com/data/icons/project-management-1-3/128/43-512.png" />
      }
      <h3>{`${student["name"]}`}</h3>
      <h5>{`${student.description}`}</h5>
    </div> */}
  </div>)
}