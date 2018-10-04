import * as React from 'react'

export default function Funny({funny}) {
  return (<div>
    {console.log("PROPROPRO: "+JSON.stringify(funny))}
    <p>{`${funny.item}: ${funny.count}`}</p>
  </div>)
}