import React from "react";

const DrumContext = React.createContext({
  currentAudioPad: [],
  currentAudioId: "Heater kit",
  display: " ",
  power: true,
  sliderVal: 0.4,
  setAudioPad: (audioArr) => {},
  setAudioId: (type) => {},
  showDisplay: (string) => {},
  isPower: (boolean) => {},
  setSliderVal: (number) => {},
});

export default DrumContext;
