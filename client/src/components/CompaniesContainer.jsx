import * as React from 'react'
import CompaniesDetail from './CompaniesDetail'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class CompaniesContainer extends React.PureComponent {

  render() {
    return <Query
      query={gql`
        {
         getAllCompanies(
            )
      }`}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.getAllCompanies.map((company) => (
          <div key={company.item}>
            <CompaniesDetail company={company} />
          </div>
        ));
      }}

    </Query>
  }
}


export default CompaniesContainer