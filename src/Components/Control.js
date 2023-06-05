import { useContext } from "react";
import DrumContext from "../Store/drum.context";
import "./Control.css";

const Control = (props) => {
  // const [powerOn, setPower] = useState(false);
  // const [bank, setBank] = useState(false);

  const drumCtx = useContext(DrumContext);

  const powerStyles = drumCtx.power
    ? {
        float: "left",
        backgroundColor: "green",
      }
    : { float: "right", ackgroundColor: "red" };

  let bankStyles;
  if (drumCtx.currentAudioId === "Heater kit") {
    bankStyles = { float: "left" };
  }
  if (drumCtx.currentAudioId === "Smooth Piano Kit") {
    bankStyles = { float: "right" };
  }

  const onInputHandler = (e) => {
    drumCtx.setSliderVal(e.target.value);
    setTimeout(() => {
      drumCtx.showDisplay("");
    }, 800);
    document
      .querySelectorAll(".clip")
      .forEach((El) => (El.volume = e.target.value));
  };

  return (
    <div className="control-container">
      <div className="control">
        <p>Power</p>
        <div onClick={() => drumCtx.isPower()} className="select">
          <div className="inner" style={powerStyles}></div>
        </div>
      </div>
      <p id="display">{drumCtx.display} </p>
      <div className="volume-slider">
        <input
          onInput={onInputHandler}
          onChange={onInputHandler}
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={drumCtx.sliderVal}
        />
      </div>
      <div className="control">
        <p>Bank</p>
        <div className="select" onClick={() => drumCtx.setAudioId()}>
          <div className="inner" style={bankStyles}></div>
        </div>
      </div>
    </div>
  );
};

export default Control;
