import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Route, Redirect } from 'react-router-dom'
import FunnyContainer from './components/FunnyContainer'
import TopBar  from "./components/layout/TopBar"
import NationalitiesContainer from './components/NationalitiesContainer'
import AverageSalary from './components/AverageSalary'
import MaleFemaleAge from './components/MaleFemaleAge'
import CompaniesContainer from './components/CompaniesContainer'

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
            <CompaniesContainer />
            <Route exact path="/" component={FunnyContainer} />
            <NationalitiesContainer />
            <AverageSalary />
            <MaleFemaleAge />
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
