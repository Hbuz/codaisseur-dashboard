import * as React from 'react'

export default function Event({event}) {
  return (<div>
    {console.log("PROPROPRO: "+JSON.stringify(event))}
    <h3>{`${event && event.name}: ${event && event.description}`}</h3>
    <h4>{`${event && event.date}`}</h4>
  </div>)
}