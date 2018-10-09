import * as React from 'react'
import Student from './Student'
import gql from "graphql-tag";
import '../styles/studentContainer.css'

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
      let counter = this.state.counter
      if (counter === this.state.students.length) {
        counter = 0
        this.setState({ counter: 0 })
      }
      this.setState({ currentStudent: this.state.students[counter] })
      this.setState({ counter: ++counter })
    }, 3000)
  }


  render() {
    return (
      <div className="btn-student-container">
        <Student student={this.state.currentStudent} />
      </div>
    )
  }
}


export default StudentContainer


