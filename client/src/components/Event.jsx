import * as React from 'react'
import moment from 'moment'
import nextArrow from '../assets/events/noun_Next_1263686.svg'

export default function Event({event}) {
  const day = moment.unix(event.date).format("MMM DD, YYYY, h:mm A");

  return (<div className="events-mapped-individual-container">
    <div>
      <h3>
        <img className="next-arrow-images" src={nextArrow} alt=''/> 
        <span className="event-title-font-stlye">
          {event && event.name}:
        </span> 
        <p className="event__title">
          {event && event.description}
        </p>
      </h3>
    </div>
    <h3>{`${event && day}`}</h3>
  </div>)
}