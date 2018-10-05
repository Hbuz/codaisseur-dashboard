import React, { Component } from "react";
import "./styles/App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import Footer from './components/layout/Footer'
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    const yeahMan = () => 
      client.query({
        query: gql`
          {
            getAllNationalities {
              nationality
              count
            }
          }
        `
      }).then( result => result = JSON.stringify(result))
    
      const result = yeahMan();

      console.log("RESS: " + JSON.stringify(result))

    return (
      <ApolloProvider client={client}>
        <div>
          {/* {result.getAllNationalities.map(nat => 
          <h6>{nat}</h6>
          )} */}
        <nav></nav>
        <div>
          <Footer  />
        </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
