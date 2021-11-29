import GameOption from "./GameOption";
import optionsAttributes from "../options/optionsAttributes";
import StyledGameChoice from "./GameChoice.styled";
import { useSelector } from "react-redux";

const GameChoice = (props) => {
  const text = props.player === "player" ? "You picked" : "The house picked";
  const choice = optionsAttributes[props.choice];

  const winner = useSelector((state) => state.game.winner);
  const hasWon = winner === props.player;

  console.log(props.player, hasWon);

  return (
    <StyledGameChoice>
      <GameOption
        styles={choice}
        src={choice.icon}
        className="option"
        animateRotation={props.animateRotation}
        isWinner={hasWon}
      />
      <h3>{text}</h3>
    </StyledGameChoice>
  );
};

export default GameChoice;
