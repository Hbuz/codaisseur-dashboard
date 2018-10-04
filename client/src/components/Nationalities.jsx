import * as React from 'react'

export default function Nationalities({nationality}) {
  return (<div>
    {console.log("PROPROPRO: "+JSON.stringify(nationality))}
    <h1>{`${nationality.nationality}: ${nationality.count}`}</h1>
  </div>)
}