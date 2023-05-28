import { useState } from "react";
import "./Control.css";

const Control = (props) => {
  const [powerOn, setPower] = useState(false);
  const [bank, setBank] = useState(false);
  const [displayVolume, setDisplayVolume] = useState(0.4);

  const powerStyles = {
    float: "left",
  };

  const bankStyles = {
    float: "right",
  };

  const onInputHandler = (e) => {
    setDisplayVolume(e.target.value);
    // document.querySelector(".clip").volume = displayVolume;
    document
      .querySelectorAll(".clip")
      .forEach((El) => (El.volume = e.target.value));
    // setTimeout(() => {
    //   document.querySelector("#display").innerHTML = "";
    // }, 2000);
  };

  return (
    <div className="control-container">
      <div className="control">
        <p>Power</p>
        <div className="select">
          <div className="inner"></div>
        </div>
      </div>
      <p id="display">{`Volume : ${Math.floor(displayVolume * 100)}`} </p>
      <div className="volume-slider">
        <input
          onInput={onInputHandler}
          onChange={onInputHandler}
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={displayVolume}
        />
      </div>
      <div className="control">
        <p>Bank</p>
        <div className="select">
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Control;
