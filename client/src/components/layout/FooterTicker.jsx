import * as React from 'react'
import gql from "graphql-tag";
import '../../styles/footerTicker.css'
import downArrow from '../../assets/footer/Frame (3).png'
import upArrow from '../../assets/footer/Frame (2).png'

class FooterTicker extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        funnies: []
    }
  }

  componentDidMount() {
    this.props.client.query({
        query: gql`{
           getAllFunnies {
                item
                count
          }}`
      }).then(response => this.setState({ funnies: response.data.getAllFunnies }))
  }

  renderIndexIcon = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber < 49) return <img src={downArrow} alt=''/>
    else return <img src={upArrow} alt=''/>
  }

  render() {
    return (
      <div className="entire-footer">
        <div className="entire-footer-ticker">
          {this.state.funnies.map(funny =>
          <div className="ticker-item">
            {funny.item} index {funny.count} {this.renderIndexIcon()}
          </div>)}
        </div>
      </div>
    )
  }
}


export default FooterTicker