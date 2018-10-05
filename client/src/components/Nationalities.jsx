import * as React from 'react'

const API = 'https://restcountries.eu/rest/v2/alpha/';

class Nationalities extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      countries: ''
    }
  }
  
  getFlags = (api, countryCode) => {
    fetch(api + countryCode)
    .then(response => response.json())
    .then(data => data)
  }

  componentDidMount() {
    const flag = this.getFlags(API, this.props.nationality.nationality)
    console.log(flag)
  }

  render() {
    return (<div>
      <h1>{`${this.props.nationality.nationality}: ${this.props.nationality.count} ` }</h1>
    </div>)
  }
}

export default Nationalities