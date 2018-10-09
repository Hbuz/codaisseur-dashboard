import * as React from 'react'
import NextCourse from './NextCourse'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class NextCourseContainer extends React.PureComponent {

  render() {
    return (
    <Query
      query={gql`
        {
          getAllCourses {
            date
            type
            maleParticipants
            femaleParticipants
          }
        }
        `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        // console.log("RESULT NEXT COURSE: " + JSON.stringify(data));


        return (
          <div>
            <NextCourse nextCourses={data.getAllCourses} />
          </div>
        )
      }
    }

    </Query>
    )
  }
}


export default NextCourseContainer