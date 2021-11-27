import GameOption from "./GameOption";
import optionsAttributes from "../options/optionsAttributes";
import StyledGameChoice from "./GameChoice.styled";
import { useSelector } from "react-redux";

const GameChoice = (props) => {
  const text = props.player === "user" ? "You picked" : "The house picked";
  const choice = optionsAttributes[props.choice];

  return (
    <StyledGameChoice>
      <GameOption
        styles={choice}
        src={choice.icon}
        className="option"
        animateRotation={props.animateRotation}
      />
      <h3>{text}</h3>
    </StyledGameChoice>
  );
};

export default GameChoice;
