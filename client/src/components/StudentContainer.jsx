import * as React from 'react'
import Student from './Student'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class StudentContainer extends React.PureComponent {

  render() {
    const queryCounter = gql`{
          getAllStudents {
            id
          }}`

    const queryStudent = gql`
          query Student($randomID: String!){
            student(id:$randomID){
              name
              description
            }}`


    return <Query
      query={queryCounter}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const numberOfStudents = data.getAllStudents.length
        const randomID = data.getAllStudents[Math.floor((Math.random() * numberOfStudents))].id

    return <Query 
        query={queryStudent} variables={{randomID}}>

          {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        // console.log("INNER RESULT: " + JSON.stringify(data));
        return <Student student={data.student}/>
           
           }}
          </Query>
          
      }}

    </Query>
  }
}


export default StudentContainer


