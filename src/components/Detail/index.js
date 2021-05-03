import React, { Component } from "react";
import makeReq from "../../lib/makeReq";
import { Container, Image, Text, InfoContainer, Info } from "./styles";
import { Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from 'react-router-dom'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: "",
      name: "",
      nativeName: "",
      population: "",
      region: "",
      subRegion: "",
      capital: "",
      topDm: [],
      currencies: [],
      languages: [],
    };
  }

  async componentDidMount() {
    var response = await makeReq(this.props.match.params.id);
    var data = response[0];
    this.setState({
      flag: data.flag,
      name: data.name,
      nativeName: data.nativeName,
      population: data.population,
      region: data.region,
      subRegion: data.subRegion,
      capital: data.capital,
      topDm: data.topLevelDomain,
      currencies: data.currencies,
      languages: data.languages,
    });
  }

  render() {
    return (
      <>
        <Link to='/'>
          <Button
            disableElevation
            startIcon={<KeyboardBackspaceIcon />}
            style={{
              color:
                localStorage.getItem("theme") === "light"
                  ? "hsl(200, 15%, 8%)"
                  : "hsl(0, 0%, 100%)",
              transition: "all .5s linear",
              marginLeft: "5vw",
              marginTop: "5vh",
              backgroundColor:
                localStorage.getItem("theme") === "light"
                  ? "hsl(0, 0%, 100%)"
                  : "hsl(209, 23%, 22%)",
              boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
            }}
          >
            Back
          </Button>
        </Link>
        <Container>
          <Image>
            <img src={this.state.flag} alt="Country Flag" />
          </Image>
          <Text>
            <h1>{this.state.name}</h1>
            <InfoContainer>
              <Info>
                <p>
                  Native Name: <span>{this.state.nativeName}</span>
                </p>
                <p>
                  Population: <span>{this.state.population}</span>
                </p>
                <p>
                  Region: <span>{this.state.region}</span>
                </p>
                <p>
                  Sub Region: <span>{this.state.subRegion}</span>
                </p>
                <p>
                  Capital: <span>{this.state.capital}</span>
                </p>
              </Info>
              <Info>
                <p>
                  Top Level Domanain:{" "}
                  <span>
                    {this.state.topDm.map((dm, i) => {
                      if (this.state.topDm.length - 1 === i) {
                        return dm;
                      }
                      return dm + ", ";
                    })}
                  </span>
                </p>
                <p>
                  Currencies:{" "}
                  <span>
                    {this.state.currencies.map((curr, i) => {
                      if (this.state.currencies.length - 1 === i) {
                        return curr.name;
                      }
                      return curr.name + ", ";
                    })}
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span>
                    {this.state.languages.map((lang, i) => {
                      if (this.state.languages.length - 1 === i) {
                        return lang.name;
                      }
                      return lang.name + ", ";
                    })}
                  </span>
                </p>
              </Info>
            </InfoContainer>
          </Text>
        </Container>
      </>
    );
  }
}
