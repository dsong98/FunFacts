import React from "react";
import "./App.css";
import {
  Button,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Spinner
} from "reactstrap";

import NavigationBar from "./components/navbar";
// import SliderBar from "./components/carousel";
// import SliderBar from "./components/sliderbar"

// import { backendUrl } from "./constants";
// import pic2 from "./images/pic2.png";

import axios from "axios";

const apiUrl =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Click the button above!",
      messages: [],
      image: "",
      spinnerOn: 0
    };
  }

  displayMessage() {
    let config = {
      headers: {
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "9131989ee8mshbcf45cebe8333f2p1cea31jsn5c6c9fbf16fb",
        accept: "application/json"
      }
    };
    this.togglerSpinner();
    axios
      .get(apiUrl, config)
      .then(res => {
        var oldMessages = this.state.messages;
        var newMessages = [res.data.value].concat(oldMessages);
        this.setState({
          message: res.data.value,
          messages: newMessages,
          image: res.data.icon_url
        });
        console.log(res.data.value);
        this.togglerSpinner()
      });
    // axios.get(backendUrl + '/getfact').then(res => {
    //   console.log(res)
    //   this.setState({
    //     message: res.data.value,
    //     image: res.data.icon_url
    //   })
    // });
  }
  togglerSpinner() {
    if (this.state.spinnerOn === 0) {
      this.setState({
        spinnerOn: 1
      });
    } else {
      this.setState({
        spinnerOn: 0
      });
    }
  }

  render() {
    const facts = this.state.messages.map((item, index) => (
      <ListGroupItem
        color="info"
        key={index}
        style={{ fontSize: 16, marginBottom: 5 }}
      >
        {item}
      </ListGroupItem>
    ));
    return (
      <div>
        {/* NavBar */}
        <div sticky="top">
          <NavigationBar />

          {/* Container below Navbar */}
          <Container>
            <div style={{ height: "50px" }} />
            <Row>
              <Col xs="3" sm="3" className="centerstuff">
                {/* Loading icon */}
                <div className="centerstuff" style={{ display: "flex" }}>
                  <Spinner
                    color="primary"
                    style={{ opacity: this.state.spinnerOn }}
                  />
                </div>

                {/* Button to get fact */}
                <div
                  style={{ height: "50px", display: "flex" }}
                  className="centerstuff"
                >
                  <Button onClick={() => this.displayMessage()}>
                    Get Fun Fact!
                  </Button>
                </div>

                {/* Image from API */}
                <div className="centerstuff" style={{ display: "flex" }}>
                  <img
                    style={{ width: 100, fontSize: 16 }}
                    src={this.state.image}
                    alt=""
                  />
                </div>
                <div style={{ height: "30px" }} />
              </Col>

              <Col>
                {/* List of facts */}
                <div style={{ textAlign: "center" }}>
                  <ListGroup>{facts}</ListGroup>
                </div>
                <div style={{ height: "50px" }} />
              </Col>
            </Row>

            {/* <div style={{ flex: 1 }}>
            <SliderBar />
          </div> */}
          </Container>
        </div>
      </div>
    );
  }
}
