import * as React from 'react'
import NextCourse from './NextCourse'
import gql from "graphql-tag";
import { Query } from "react-apollo";


class NextCourseContainer extends React.PureComponent {
  
  render() {

    const dateNow = Math.floor(Date.now()/1000)

    return (
    <Query
      query={gql`
      query Events($dateNow: Int!)
        {
          getAllCourses 
          (
            where: {date_gt: $dateNow}
            first: 2
            skip: 0
            orderBy: date_ASC
            )
          {
            date
            type
            maleParticipants
            femaleParticipants
          }
        }
        `}
         variables={{ dateNow }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const courseFetched = data.getAllCourses
        if(courseFetched[0].date !== courseFetched[1].date){
          courseFetched.pop()
        }
        return (
          <div>
            <NextCourse nextCourses={courseFetched} />
          </div>
        )
      }
    }

    </Query>
    )
  }
}


export default NextCourseContainer