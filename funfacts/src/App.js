import React from "react";
import "./App.css";

import NavigationBar from "./components/navbar";
import SliderBar from "./components/carousel";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* NavBar */}
        <NavigationBar />
        {/* Container below Navbar */}
        <div className="container">
          <SliderBar />
        </div>
        
        <AwesomeSlider>
          <div data-src="/path/to/image-0.png" />
          <div data-src="/path/to/image-1.png" />
          <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider>
        
      </div>
    );
  }
}
