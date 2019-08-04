import React from "react";
import "./App.css";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

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
      image: ""
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

    axios.get(apiUrl, config).then(res => {
      this.setState({
        message: res.data.value,
        messages: this.state.messages.concat(res.data.value),
        image: res.data.icon_url
      });
    });
    // axios.get(backendUrl + '/getfact').then(res => {
    //   console.log(res)
    //   this.setState({
    //     message: res.data.value,
    //     image: res.data.icon_url
    //   })
    // });
  }

  render() {
    // const facts = this.state.messages.map(function(item){
    //   return <li>{item}</li>;
    // });
    const facts = this.state.messages.map(item => (
      <ListGroupItem color="info" style={{fontSize: 18}}>{item}</ListGroupItem>
    ));
    return (
      <div>
        {/* NavBar */}
        <NavigationBar />
        {/* Container below Navbar */}
        <div className="container">
          <div style={{ flex: .3 }} />

          {/* Button to get fact */}
          <div style={{ flex: 1 }}>
            <Button onClick={() => this.displayMessage()}>Get Fun Fact!</Button>
          </div>

          <div>
            <img
              style={{ width: 200 }}
              src={this.state.image}
              alt="Click the button above!"
            />
          </div>

          <div style={{ flex: .2 }} />

          <div style={{ flex: 1, textAlign: "center" }}>
            <ListGroup>
              {facts}
            </ListGroup>
          </div>

          <div style={{ flex: 6 }} />

          {/* <div style={{ flex: 1 }}>
            <SliderBar />
          </div> */}
        </div>
      </div>
    );
  }
}
