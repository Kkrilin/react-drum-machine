import React from "react";
import Audio from "./Components/Audio";
import Control from "./Components/Control";
import DrumProvider from "./Store/DrumProvider";

function App() {
  return (
    <DrumProvider>
      <div id="drum-machine">
        <Audio />
        <Control />
      </div>
    </DrumProvider>
  );
}

export default App;
