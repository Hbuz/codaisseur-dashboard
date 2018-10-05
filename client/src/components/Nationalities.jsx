import * as React from 'react'

const API = 'https://restcountries.eu/rest/v2/alpha/';

class Nationalities extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }
  
  getFlags = (api, countryCode) => {
    fetch(api + countryCode)
    .then(response => response.json())
    .then(data => {
      const country = data
      this.setState({
        flag: country.flag})
      console.log(this.state)
    })
  }

  componentDidMount() {
    this.getFlags(API, this.props.nationality.nationality)
  }

  render() {
    return (<div>
      <h1>{`${this.props.nationality.nationality}: ${this.props.nationality.count}` }</h1>
      <img src={this.state.flag} alt={`${this.state.name} flag`} />
    </div>)
  }
}

export default Nationalities