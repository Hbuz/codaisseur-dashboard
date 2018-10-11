import * as React from 'react'
import gql from "graphql-tag";
import '../../styles/footerTicker.css'
import downArrow from '../../assets/footer/Frame (3).png'
import upArrow from '../../assets/footer/Frame (2).png'

class FooterTicker extends React.PureComponent {
  constructor(props) {
    super(props)
    this.getFunnies()
    this.state = {
      funnies: [],
    }
  }

  componentDidMount() {

    setInterval(() => {
      this.state.funnies.forEach(currentFunny => {
        let randomValue = Math.floor(Math.random() * 5) + 1
        this.funnyQuery(currentFunny.id, currentFunny.item, currentFunny.count + randomValue)
      })
    }, 20000)

  }

  funnyQuery = async (id, itemArg, value) => await this.props.client.mutate({
    variables: { id: id, item: itemArg, value: value },
    mutation: gql` 
    mutation Funny($id: ID!, $item: String!, $value: Int!)
    {
       updateFunny(
          where: {
            id: $id,
            item: $item
          }
          data: {
            count: $value
          }
        ) {
            item
            count
      }}`
  }).then(response => {
    let items = [...this.state.funnies];
    let item = items.find((funny) => funny.item === itemArg)
    item.count = response.data.updateFunny.count;
    let index = items.indexOf(item);
    items[index] = item;
    this.setState({ funnies: items });
  })


  getFunnies = async () => await this.props.client.query({
    query: gql`{
         getAllFunnies {
              id
              item
              count
        }}`
  }).then(response => this.setState({ funnies: response.data.getAllFunnies }))

  //   renderIndexIcon = () => {
  //     const randomNumber = Math.floor(Math.random())
  //     if (randomNumber < .49) return <img src={downArrow} alt=''/>
  //     else return <img src={upArrow} alt=''/>
  //   }

  render() {
    return (
      <div className="entire-footer">
        <div className="entire-footer-ticker">
          {this.state.funnies.map(funny =>
            <div className="ticker-item">
              {funny.item}: {funny.count}
            </div>)}
        </div>
      </div>
    )
  }
}


export default FooterTicker