import React, { Component } from "react";
import makeReq from "../../lib/makeReq";
import Country from '../Country'
import { Countries } from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  async componentDidMount() {
    this.setState({
      countries: await makeReq()
    }) 
  }
  render() {
    return (
      <Countries>
        {this.state.countries.map((country, i) => {
          return <Country 
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={i}
          />
        })}
      </Countries>
    )
  }
}
