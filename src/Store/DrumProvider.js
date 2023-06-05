import DrumContext from "./drum.context";
import React, { useReducer } from "react";

import heater1 from "../Assets/Heater Kit/Heater-1.mp3";
import heater2 from "../Assets/Heater Kit/Heater-2.mp3";
import heater3 from "../Assets/Heater Kit/Heater-3.mp3";
import heater4 from "../Assets/Heater Kit/Heater-4_1.mp3";
import heater5 from "../Assets/Heater Kit/Heater-6.mp3";
import heater6 from "../Assets/Heater Kit/Dsc_Oh.mp3";
import heater7 from "../Assets/Heater Kit/Kick_n_Hat.mp3";
import heater8 from "../Assets/Heater Kit/RP4_KICK_1.mp3";
import heater9 from "../Assets/Heater Kit/Cev_H2.mp3";

import piano1 from "../Assets/Smooth Piano Kit/Chord_1.mp3";
import piano2 from "../Assets/Smooth Piano Kit/Chord_2.mp3";
import piano3 from "../Assets/Smooth Piano Kit/Chord_3.mp3";
import piano4 from "../Assets/Smooth Piano Kit/Give_us_a_light.mp3";
import piano5 from "../Assets/Smooth Piano Kit/Dry_Ohh.mp3";
import piano6 from "../Assets/Smooth Piano Kit/Bld_H1.mp3";
import piano7 from "../Assets/Smooth Piano Kit/punchy_kick_1.mp3";
import piano8 from "../Assets/Smooth Piano Kit/side_stick_1.mp3";
import piano9 from "../Assets/Smooth Piano Kit/Brk_Snr.mp3";

const heaterKit = [
  { id: "Q", src: heater1, type: "Heater 1" },
  { id: "W", src: heater2, type: "Heater 2" },
  { id: "E", src: heater3, type: "Heater 3" },
  { id: "A", src: heater4, type: "Heater 4" },
  { id: "S", src: heater5, type: "Clap" },
  { id: "D", src: heater6, type: "Open HH" },
  { id: "Z", src: heater7, type: "Kick n'Hat" },
  { id: "X", src: heater8, type: "Kick" },
  { id: "C", src: heater9, type: "Closed HH" },
];

const smoothPianoKit = [
  { id: "Q", src: piano1, type: "Chord 1" },
  { id: "W", src: piano2, type: "Chord 2" },
  { id: "E", src: piano3, type: "Chord 3" },
  { id: "A", src: piano4, type: "Shaker" },
  { id: "S", src: piano5, type: "Open HH " },
  { id: "D", src: piano6, type: "Closed HH" },
  { id: "Z", src: piano7, type: "Punchy Kick" },
  { id: "X", src: piano8, type: "Side Stick" },
  { id: "C", src: piano9, type: "Snare" },
];

const defaultDrumState = {
  currentAudioPad: heaterKit,
  currentAudioId: "Heater kit",
  display: "",
  power: true,
  sliderVal: 0.4,
};

const ACTIONS = {
  DRUMAUDIO: "DRUMAUDIO",
  DISPLAY: "DISPLAY",
  SLIDER: "SLIDER",
  POWER: "POWER",
  BANK: "BANK",
};

const drumReducer = (state, action) => {
  if (action.type === ACTIONS.DRUMAUDIO) {
    console.log(5);
    return { ...state, currentAudioPad: action.audioPad };
  }
  if (action.type === ACTIONS.DISPLAY) {
    return { ...state, display: action.text };
  }
  if (action.type === ACTIONS.SLIDER) {
    let updateDisplay = `Volume : ${Math.floor(Number(action.value) * 100)}`;
    setTimeout(() => {
      updateDisplay = "";
    }, 800);
    return {
      ...state,
      display: updateDisplay,
      sliderVal: action.value,
    };
  }
  if (action.type === ACTIONS.POWER) {
    return {
      ...state,
      power: !state.power,
    };
  }
  if (action.type === ACTIONS.BANK) {
    if (state.currentAudioId === "Heater kit") {
      return {
        ...state,
        currentAudioPad: smoothPianoKit,
        currentAudioId: "Smooth Piano Kit",
        display: "Smooth Piano Kit",
      };
    }
    if (state.currentAudioId === "Smooth Piano Kit") {
      return {
        ...state,
        currentAudioPad: heaterKit,
        currentAudioId: "Heater kit",
        display: "Heater kit",
      };
    }
  }
};

const DrumProvider = (props) => {
  const [drumState, dispatchDrumAction] = useReducer(
    drumReducer,
    defaultDrumState
  );
  // Dispatch functions
  const audioPadHandler = (audioArr) => {
    dispatchDrumAction({
      type: ACTIONS.DRUMAUDIO,
      audioPad: audioArr,
    });
  };
  const updateDisplay = (type) => {
    dispatchDrumAction({
      type: ACTIONS.DISPLAY,
      text: type,
    });
  };
  const updateSliderVal = (value) => {
    dispatchDrumAction({
      type: ACTIONS.SLIDER,
      value: value,
    });
  };

  const updatePower = () => {
    dispatchDrumAction({ type: ACTIONS.POWER });
  };

  const updateAudioId = () => {
    dispatchDrumAction({ type: ACTIONS.BANK });
  };

  const drumContext = {
    currentAudioPad: drumState.currentAudioPad,
    currentAudioId: drumState.currentAudioId,
    display: drumState.display,
    power: drumState.power,
    sliderVal: drumState.sliderVal,
    setAudioPad: audioPadHandler,
    setAudioId: updateAudioId,
    showDisplay: updateDisplay,
    isPower: updatePower,
    setSliderVal: updateSliderVal,
  };

  return (
    <DrumContext.Provider value={drumContext}>
      {props.children}
    </DrumContext.Provider>
  );
};

export default DrumProvider;
