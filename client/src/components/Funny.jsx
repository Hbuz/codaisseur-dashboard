import * as React from 'react'

export default function Funny({funny}) {
  return (<div>
    {console.log("PROPROPRO: "+JSON.stringify(funny))}
    <h1>{`${funny.item}: ${funny.count}`}</h1>
  </div>)
}