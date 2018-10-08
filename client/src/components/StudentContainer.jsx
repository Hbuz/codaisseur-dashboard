import * as React from 'react'
import Student from './Student'
import gql from "graphql-tag";
import { Query } from "react-apollo";


class StudentContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { randomID: "" };
  }
  // componentDidMount() {
  //   var intervalId = setInterval(() => {}, 1000);
  // }

  render() {
    const queryCounter = gql`{
          getAllStudents {
            id
          }}`

    const queryStudent = gql`
          query Student($randomID: String!){
            student(id:$randomID){
              name
              gender
              description
              status
            }}`

    return (<Query
      query={queryCounter} pollInterval={1100}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const numberOfStudents = data.getAllStudents.length

        setInterval(() => {
          const randomID = data.getAllStudents[Math.floor((Math.random() * numberOfStudents))].id
          if (randomID !== this.state.randomID)
            this.setState(
              { randomID: data.getAllStudents[Math.floor((Math.random() * numberOfStudents))].id })
        },
          5000)

        console.log("STATE: " + JSON.stringify(this.state))
        const randomID = this.state.randomID
        return <Query
          query={queryStudent} variables={{ randomID }} pollInterval={1100} >

          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            // console.log("INNER RESULT: " + JSON.stringify(data));
            return <Student student={data.student} />

          }}
        </Query>

      }}

    </Query>)

  }
}


export default StudentContainer


