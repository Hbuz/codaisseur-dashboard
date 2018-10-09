import * as React from 'react'
import Nationalities from './Nationalities'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class NationalitiesContainer extends React.PureComponent {

  render() {
    return (
    <div className="nationalities-container-whole">
      <div className="btn-nationalities-message">
        <p>Students from all over the world</p>
      </div>
      <Query
        query={gql`
          {
          getAllNationalities(
              first: 5
              skip: 0
              orderBy: count_DESC) {
              nationality
              count}
        }`}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div className="btn-nationalities-flags">
              {data.getAllNationalities.map((nationality) => (
              <div key={nationality.item} className="btn_nationalities-flags">
                <Nationalities nationality={nationality} />
              </div>
              ))}
            </div>
          );
        }}

      </Query>
    </div>
  )}
}


export default NationalitiesContainer