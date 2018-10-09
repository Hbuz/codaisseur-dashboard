import * as React from 'react'
import Event from './Event'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Grid from '@material-ui/core/Grid'
import '../styles/events.css'

class EventContainer extends React.PureComponent {

  render() {
    return (
      <div className="btn-events-container">
      <Grid container direction="column" alignItems="center">
        <Grid item>
        <h2>Incoming Events</h2>
        </Grid>
        <Grid item>
          <Query
            query={gql`
        {
          getAllEvents (
            first: 3
            skip: 0
            ){
            id
            name
            date
            description
            where
          }
        }
        `}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error :(</p>;
              // console.log("RESS EVENT: " + JSON.stringify(data));


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