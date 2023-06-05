import React, { useContext } from "react";

import DrumContext from "../Store/drum.context";
import AudioCard from "./AudioCard";

const Audio = (props) => {
  const drumCtx = useContext(DrumContext);

  const keyDownHandler = (e) => {
    drumCtx.currentAudioPad.forEach((heater) => {
      if (e.key === heater.id.toLowerCase() || e.key === heater.id) {
        document.querySelector(`#${heater.id}`).play();
        document
          .querySelector(`#${heater.id}`)
          .parentElement.classList.add("active");
        setTimeout(() => {
          document
            .querySelector(`#${heater.id}`)
            .parentElement.classList.remove("active");
        }, 200);
      }
    });
  };

  document.addEventListener("keydown", keyDownHandler);

  const playAudio = (Elid, type) => {
    drumCtx.showDisplay(type);
    const audio = document.getElementById(Elid);

    audio.play();

    document.getElementById(type).classList.add("active");
    setTimeout(() => {
      document.getElementById(type).classList.remove("active");
    }, 200);
  };

  //   useEffect(() => {
  //     drumCtx.setAudioPad(heaterKit);
  //   }, []);
  //   console.log(drumCtx.currentAudioPad);

  return (
    <div id="audio-pads">
      {drumCtx.currentAudioPad.map((audio) => (
        <AudioCard
          text={audio.type}
          key={audio.id}
          onClick={() => playAudio(audio.id, audio.type)}
        >
          <audio
            className="clip"
            id={audio.id}
            src={drumCtx.power ? audio.src : "#"}
          ></audio>
          {audio.id}
        </AudioCard>
      ))}
    </div>
  );
};

export default Audio;
