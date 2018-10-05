import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Route, Redirect } from 'react-router-dom'
import FunnyContainer from './components/FunnyContainer'
import TopBar from "./components/layout/TopBar"
import NationalitiesContainer from './components/NationalitiesContainer'
import AverageSalary from './components/AverageSalary'
import MaleFemaleAge from './components/MaleFemaleAge'
import Grid from '@material-ui/core/Grid'

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
            <Grid container direction="row" justify="center" alignItems="flex-start">
              <Grid item>
                <Grid container>
                  <Grid item>
                    <FunnyContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <NationalitiesContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <AverageSalary />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <MaleFemaleAge />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
