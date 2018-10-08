import * as React from 'react'
import Student from './Student'
import gql from "graphql-tag";


class StudentContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      currentStudent: {},
      counter: 0
    };
  }

  componentDidMount() {
    this.props.client.query({
      query: gql`{
          getAllStudents {
          id
          name
            gender
            description
            status
        }}`
    }).then(response => this.setState({ students: response.data.getAllStudents }))


    setInterval(() => {
      if (this.state.counter === this.state.students.length) {
        this.setState({ counter: 0 })
      }
      this.setState({ currentStudent: this.state.students[this.state.counter] })
      this.setState({ counter: ++this.state.counter })
    }, 3000)
  }


  render() {
    return (
      <Student student={this.state.currentStudent} />
    )
  }
}


export default StudentContainer


