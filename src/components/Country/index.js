import React, { Component } from "react";
import { Container, Text } from "./styles";

export default class Country extends Component {
  render() {
    return (
      <Container>
        <a href={`/id`}>
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
        </a>
      </Container>
    );
  }
}
