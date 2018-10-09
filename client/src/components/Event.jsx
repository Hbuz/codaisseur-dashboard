import * as React from 'react'
import moment from 'moment'

export default function Event({event}) {
  const day = moment.unix(event.date).format("MMM MM, YYYY, h:mm A");

  return (<div>
    {/* {console.log("PROPROPRO: "+JSON.stringify(event))} */}
    <h3>{`${event && event.name}: ${event && event.description}`}</h3>
    <h4>{`${event && day}`}</h4>
  </div>)
}