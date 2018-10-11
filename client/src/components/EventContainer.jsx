import * as React from 'react'
import Event from './Event'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Grid from '@material-ui/core/Grid'
import '../styles/events.css'

class EventContainer extends React.PureComponent {

  render() {

    const dateNow = Math.floor(Date.now()/1000)

    return (
      <div className="btn-events-container">
      <Grid container direction="column" alignItems="center">
        <Grid item style={{backgroundColor: "#E94C4C", width: "100%", textAlign: "center", color: "#ffff"}}>
        <h2>Upcoming Events</h2>
        </Grid>
        <Grid item style={{ width: "75%", textAlign: "left", marginTop: "2%"}}>
          <Query
            query={gql`
            query Events($dateNow: Int!)
        {
          getAllEvents (
            where: {date_gt: $dateNow}
            first: 4
            skip: 0
            orderBy: date_ASC
            ){
            id
            name
            date
            description
            where
          }
        }
        `}
        variables={{ dateNow }}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;

              return data.getAllEvents.map((event) => (
                <div key={event.id}>
                  <Event event={event} />
                </div>
              ));
            }}

          </Query>
        </Grid>
      </Grid>
      </div>)
  }
}


export default EventContainer