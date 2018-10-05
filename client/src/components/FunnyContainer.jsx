import * as React from 'react'
import Funny from './Funny'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class FunnyContainer extends React.PureComponent {

  render() {
    return <Query
      query={gql`
        {
          getAllFunnies {
            item
            count
          }
        }
        `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log("RESS: " + JSON.stringify(data));


        return data.getAllFunnies.map((funny) => (

          <div key={funny.item}>
            <Funny funny={funny} />
          </div>
        ));
      }}

    </Query>
  }
}


export default FunnyContainer