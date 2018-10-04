import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
   

    return (
      <ApolloProvider client={client}>
        <Query
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

            return data.getAllFunnies.map(({ item, count }) => (
              <div key={item}>
                <p>{`${item}: ${count}`}</p>
              </div>
            ));
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
