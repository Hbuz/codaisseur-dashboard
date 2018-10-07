import * as React from 'react'

export default function Funny({funny}) {
  return (<div>
    {console.log("PROPROPRO: "+JSON.stringify(funny))}
    <h1>{`${funny && funny.item}: ${funny && funny.count}`}</h1>
  </div>)
}