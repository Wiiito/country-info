import React, { Component } from "react";
import { Container, Text } from "./styles";
import { Link } from 'react-router-dom'

export default class Country extends Component {
  render() {
    return (
      <Container>
        <Link to={`/details/${this.props.code}`}>
          <img src={this.props.flag} alt={this.props.name} />
          <Text>
            <h3>{this.props.name}</h3>
            <h4>
              Population:<span>{this.props.population}</span>
            </h4>
            <h4>
              Region:<span>{this.props.region}</span>
            </h4>
            <h4>
              Capital:<span>{this.props.capital}</span>
            </h4>
          </Text>
        </Link>
      </Container>
    );
  }
}
