import "./AudioCard.css";

const AudioCard = (props) => {
  return (
    <div id={props.text} onClick={props.onClick} className="drum-pad">
      {props.children}
    </div>
  );
};

export default AudioCard;
