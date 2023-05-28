import React from "react";
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
import AudioCard from "./AudioCard";

const heaterKit = [
  { id: "Q", audio: heater1, type: "Heater 1" },
  { id: "W", audio: heater2, type: "Heater 2" },
  { id: "E", audio: heater3, type: "Heater 3" },
  { id: "A", audio: heater4, type: "Heater 4" },
  { id: "S", audio: heater5, type: "Clap" },
  { id: "D", audio: heater6, type: "Open HH" },
  { id: "Z", audio: heater7, type: "Kick n'Hat" },
  { id: "X", audio: heater8, type: "Kick" },
  { id: "C", audio: heater9, type: "Closed HH" },
];

const smoothPianoKit = [
  { id: "Q", audio: piano1, type: "Chord 1" },
  { id: "W", audio: piano2, type: "Chord 2" },
  { id: "E", audio: piano3, type: "Chord 3" },
  { id: "A", audio: piano4, type: "Shaker" },
  { id: "S", audio: piano5, type: "Open HH " },
  { id: "D", audio: piano6, type: "Closed HH" },
  { id: "Z", audio: piano7, type: "Punchy Kick" },
  { id: "X", audio: piano8, type: "Side Stick" },
  { id: "C", audio: piano9, type: "Snare" },
];

const keyDownHandler = (e) => {
  heaterKit.forEach((heater) => {
    if (e.key === heater.id.toLowerCase() || e.key === heater.id) {
      document.querySelector(`#${heater.id}`).play();
      document
        .querySelector(`#${heater.id}`)
        .parentElement.classList.add("active");
      //   setTimeout(() => {
      //     document
      //       .querySelector(`#${aObj.id}`)
      //       .parentElement.classList.remove("active");
      //   }, 200);
    }
  });
};

const keyUpHandler = () => {
  document.querySelectorAll(`.drum-pad`).forEach((El) => {
    El.classList.remove("active");
  });
};
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

const Audio = (props) => {
  const clickHandler = (e) => {
    e.target.children[0].play();
    // console.log(e.target);
    e.target.classList.add("active");
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 200);
  };

  return (
    <div id="audio-pads">
      {heaterKit.map((heater) => {
        return (
          <AudioCard text={heater.type} key={heater.id} onClick={clickHandler}>
            <audio className="clip" id={heater.id} src={heater.audio}></audio>
            {heater.id}
          </AudioCard>
        );
      })}
    </div>
  );
};

export default Audio;
