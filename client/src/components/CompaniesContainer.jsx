import * as React from 'react'
import CompaniesTotal from './CompaniesTotal'
import CompaniesOverview from './CompaniesOverview'
import gql from "graphql-tag";
import { Query } from "react-apollo";
// import '../styles/companies.css'
import '../styles/companiesContainer.css'

class CompaniesContainer extends React.PureComponent {

  render() {
    return( 
      <Query
        query={gql`
          {
           getAllCompanies{
               name
               domain
           }
        }`}
      >

        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div className="companies__container">
              <div className="companies__total">
                <CompaniesTotal companies={data.getAllCompanies.length} />
              </div>

              <div className="companies__container--list">
                {data.getAllCompanies.map((company) => (
                <div key={company.name} className="companies__overview">
                  <CompaniesOverview company={company} />
                </div>))}
              </div>
            </div>
          );
        }}

      </Query>
    )
  }
}


export default CompaniesContainer