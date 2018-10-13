import * as React from 'react'
import '../styles/companies.css'

const API = 'https://logo.clearbit.com/'

class CompaniesOverview extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }
  
  getLogos = (api, domain) => {  // From https://blog.clearbit.com/logo/
    fetch(api + domain)
    .then(data => {
      const logo = data.url
      this.setState({
        logo: logo,
        })
    })
  }

  componentDidMount() {
    this.getLogos(API, this.props.company.domain)
  }
  
  render() {
    return (
      <div className="btn-company-logo-image">
        <img  src={this.state.logo} 
              alt={this.props.company.name}
        />
      </div>)
  }
}

export default CompaniesOverview