import React, { Component } from "react";
import makeReq from "../../lib/makeReq";
import Country from '../Country'
import { Countries, Header, Input, Search, Select } from './styles'
import SearchIcon from '@material-ui/icons/Search';

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
      <>
        <Header>
          <Search>
            <SearchIcon />
            <Input name='country' placeholder='Search'/>
          </Search>
          <Select name="region">
            <option value="" disabled selected hidden>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Select>
        </Header>
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
      </>
    )
  }
}
