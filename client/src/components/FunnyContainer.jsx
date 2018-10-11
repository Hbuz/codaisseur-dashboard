import * as React from 'react'
import Funny from './Funny'
import gql from "graphql-tag";
import { Query } from "react-apollo";

class FunnyContainer extends React.PureComponent {
  componentDidMount() {
    const funnyQuery = (item, value) => this.props.client.query({
      query: gql` 
      mutation Funny($item: String!, $value: Int!)
      {
         updateFunny(
              item: $item
              value: $value
              ) {
              item
              count
        }}`,
      variables: { item: item, value: value }
    }).then(response => console.log(JSON.stringify(response)))

    setInterval(() => {
      console.log("Ciao")
      // let page = this.state.page
      // funnyQuery("coffee", 1)
      // this.setState({ page: ++page })
    }, 3000)
  }

  render() {
    return <Query
      query={gql`
        {
          getAllFunnies {
            item
            count
          }
        }
        `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.getAllFunnies.map((funny) => (

          <div key={funny.item}>
            <Funny funny={funny} />
          </div>
        ));
      }}

    </Query>
  }
}


export default FunnyContainer