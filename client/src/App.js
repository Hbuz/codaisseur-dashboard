import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Route, Redirect } from 'react-router-dom'
import FunnyContainer from './components/FunnyContainer'
import TopBar  from "./components/layout/TopBar"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {


    return (
      <ApolloProvider client={client}>
        <div>
          <nav>
            <TopBar class='header page__header' />
          </nav>
          <main style={{ marginTop: 75 }}>
            <Route exact path="/" component={FunnyContainer} />
          </main>
          <footer>
            {/* <Footer /> */}
          </footer>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
