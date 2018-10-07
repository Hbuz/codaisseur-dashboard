import * as React from 'react'

export default function Student({ student }) {
  return (<div>
    {console.log("PROPROPRO: " + JSON.stringify(student))}

    <div>
      <h3>{`${student["name"]}`}</h3>
      <h5>{`${student.description}`}</h5>
    </div>
  </div>)
}