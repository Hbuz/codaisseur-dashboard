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
import StudentContainer from './components/StudentContainer'
import Grid from '@material-ui/core/Grid'
import EventContainer from "./components/EventContainer";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {


    return (
      <ApolloProvider client={client}>
        <div>
          {/* <nav>
            <TopBar class='header page__header' />
          </nav> */}
          <main style={{ marginTop: "2%", marginLeft: "5%", marginRight: "5%", marginBottom: "2%" }}>
            <Grid container direction="row" justify="center" spacing={16}>
              <Grid item xs={3}>
                <Grid container direction="column">
                  <Grid item>
                    <TopBar />
                  </Grid>
                  <Grid item style={{ backgroundColor: "#E94C4C" }}>
                    <FunnyContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column">
                  <Grid item style={{ backgroundColor: "#FFFFFF" }}>
                    <NationalitiesContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column">
                  <Grid item style={{ backgroundColor: "#E94C4C" }}>
                    <AverageSalary />
                  </Grid>
                  <Grid item style={{ backgroundColor: "#FFFFFF" }}>
                    <EventContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column" >
                  <Grid item style={{ backgroundColor: "#FFFFFF" }}>
                    <StudentContainer />
                  </Grid>
                  <Grid item style={{ backgroundColor: "#E94C4C", marginTop: "5%" }}>
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
