import * as React from 'react'
import Nationalities from './Nationalities'
import gql from "graphql-tag";


class NationalitiesContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.totNatQuery()
    this.state = {
      nationalities: [],
      currentNationalities: [],
      page: 0
    };
  }

  totNatQuery = () => this.props.client.query({
    query: gql`{
       getAllNationalities {
            nationality
      }}`
  }).then(response => this.setState({ nationalities: response.data.getAllNationalities }))

  componentDidMount() {
    const natQuery = (page) => this.props.client.query({
      query: gql` 
      query Nationality($page: Int!)
      {
         getAllNationalities(
              first: 5
              skip: $page
              ) {
              nationality
              count
        }}`,
      variables: { page: page }
    }).then(response => this.setState({ currentNationalities: response.data.getAllNationalities }))


    setInterval(() => {
      let page = this.state.page
      if (page * 5 >= this.state.nationalities.length) {
        page = 0
        this.setState({ page: 0 })
      }
      natQuery(this.state.page * 5)
      this.setState({ page: ++page })
    }, 4000)
  }


  render() {
    return (
      <div className="nationalities-container-whole">
        <div className="btn-nationalities-message">
          <p className="nationalities__header">
            Students from all over the world
          </p>
        </div>
        <div className="btn-nationalities-flags">
          {this.state.currentNationalities.map((nationality) =>
            <div  key={nationality.nationality} 
                  className="btn_nationalities-flags"
            >
              <Nationalities nationality={nationality} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default NationalitiesContainer