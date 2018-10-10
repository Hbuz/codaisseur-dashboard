import React, { Component } from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import TopBar from "./components/layout/TopBar"
import NationalitiesContainer from './components/NationalitiesContainer'
import AverageSalary from './components/AverageSalary'
import MaleFemaleAge from './components/MaleFemaleAge'
import CompaniesContainer from './components/CompaniesContainer'
import StudentContainer from './components/StudentContainer'
import Grid from '@material-ui/core/Grid'
import EventContainer from "./components/EventContainer";
import NextCourseContainer from "./components/NextCourseContainer";

import Graduated from './components/Graduated'
import FirstJob from './components/FirstJob'
import FooterTicker from './components/layout/FooterTicker'


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {


    return (
      <ApolloProvider client={client}>
        <div>
          <main style={{ marginTop: "1%", marginLeft: "5%", marginRight: "5%", marginBottom: "1%" }}>
            <Grid container direction="row" justify="center" spacing={16}>
              <Grid item xs={3}>
                <Grid container direction="column" className="btn-main-grid-column">
                  <Grid item>
                    <TopBar />
                  </Grid>         
                  <Grid item style={{ backgroundColor: "#E94C4C" }}>
                    <CompaniesContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column" className="btn-main-grid-column">
                  <Grid item>
                    <Graduated />
                  </Grid>
                  <Grid item style={{ marginTop: "2%" }}>
                    <FirstJob />
                  </Grid>
                  <Grid item style={{ marginTop: "2%" }}>
                    <MaleFemaleAge /> 
                  </Grid>
                  <Grid item style={{ marginTop: "2%" }}>
                    <NationalitiesContainer client={client} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column" className="btn-main-grid-column">
                  <Grid item>
                    <AverageSalary />
                  </Grid>
                  <Grid item style={{ backgroundColor: "#FFFFFF", marginTop: "5%" }}>
                    <EventContainer />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container direction="column" className="btn-main-grid-column">
                  <Grid item style={{ backgroundColor: "#FFFFFF" }}>
                    <StudentContainer client={client} />
                  </Grid>
                  <Grid item style={{ backgroundColor: "#E94C4C", marginTop: "5%"  }}>
                    <NextCourseContainer />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </main>
          <footer>
            <FooterTicker client={client}/>
          </footer>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
