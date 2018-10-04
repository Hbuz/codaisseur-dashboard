import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import TopBar  from "./components/layout/TopBar"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    // const yeahMan = () => 
    //   client.query({
    //     query: gql`
    //       {
    //         getAllNationalities {
    //           nationality
    //           count
    //         }
    //       }
    //     `
    //   })
    // }).then( result => console.log(JSON.stringify(result)))

    async function yeahMan(){ 
      return await client.query({
        query: gql`
          {
            getAllNationalities {
              nationality
              count
            }
          }
        `
      })
    }


    const result = yeahMan();

    console.log("RESS: " + JSON.stringify(result));

    return (
      <ApolloProvider client={client}>
      <TopBar class='header page__header'/>
        <div>
          {/* {result.data.getAllNationalities.map(nat => 
          <h6>{nat}</h6>
          )} */}
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
