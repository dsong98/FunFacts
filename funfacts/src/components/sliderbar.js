import React from "react";
import "../App.css";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const SliderBar = (
    <AwesomeSlider>
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );
