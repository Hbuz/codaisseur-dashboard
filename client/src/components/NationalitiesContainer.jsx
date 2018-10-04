import * as React from 'react'
import Nationalities from './Nationalities'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class NationalitiesContainer extends React.PureComponent {

  render() {
    return <Query
      query={gql`
      {
        getAllNationalities {
          nationality
          count
        }
      }`}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log("RESS: " + JSON.stringify(data));

        return data.getAllNationalities.map((nationality) => (
          <div key={nationality.item}>
            <Nationalities nationality={nationality} />
            {console.log(nationality)}
          </div>
        ));
      }}

    </Query>
  }
}


export default NationalitiesContainer