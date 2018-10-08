import * as React from 'react'
import Grid from '@material-ui/core/Grid'

export default function Student({ student }) {
  return (<div>
    {/* {console.log("PROPROPRO: " + JSON.stringify(student))} */}

    <Grid container direction="column" alignItems="center">
      <Grid item>
        {student && student.gender === "M" &&
          <img style={{ marginLeft: "7.5%", height: "85%", width: "85%" }} src="https://cdn1.iconfinder.com/data/icons/data-science-1-1/512/20-512.png" />
        }
        {student && student.gender === "F" &&
          <img style={{ marginLeft: "7.5%", height: "85%", width: "85%" }} src="https://cdn3.iconfinder.com/data/icons/project-management-1-3/128/43-512.png" />
        }
      </Grid>
      <Grid item>
        <h3>{student && `${student["name"]}`}</h3>
      </Grid>
      <Grid item>
        <h5>{student && `${student.description}`}</h5>
      </Grid>
      <Grid item>
        <h5>{student && `${student.status}`}</h5>
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