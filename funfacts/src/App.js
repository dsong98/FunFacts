import React from "react";
import "./App.css";
import { Button } from "reactstrap";

import NavigationBar from "./components/navbar";
import SliderBar from "./components/carousel";
// import SliderBar from "./components/sliderbar"

// import { backendUrl } from "./constants";

const apiUrl =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "This is from the Chuck Norris API"
    };
  }

  displayMessage() {
    var unirest = require("unirest");
    var req = unirest("GET", apiUrl);

    req.headers({
      "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      "x-rapidapi-key": "9131989ee8mshbcf45cebe8333f2p1cea31jsn5c6c9fbf16fb",
      accept: "application/json"
    });

    req.end(function(res) {
      if (res.error) throw new Error(res.error);
      console.log(res.body.value)
    })
  }

  render() {
    return (
      <div>
        {/* NavBar */}
        <NavigationBar />
        {/* Container below Navbar */}
        <div className="container">
          <div style={{ flex: 3 }} />

          {/* Button to get fact */}
          <div style={{ flex: 1 }}>
            <Button onClick={() => this.displayMessage()}>Get Fun Fact!</Button>
          </div>

          <div style={{ flex: 5 }} />

          <div style={{ flex: 1 }}>
            <SliderBar />
          </div>
        </div>
      </div>
    );
  }
}
