import React from "react";

const CartContext = React.createContext({
  currentAudioPad: [],
  currentAudioId: "Heater kit",
  display: "",
  power: true,
  sliderVal: "0.4",
});

export default CartContext;
