import GameChoice from "./GameChoice";
import Result from "./Result";
import StyledGame from "./Game.styled";
import { useSelector } from "react-redux";

const Game = () => {
  const userChoice = useSelector((state) => state.game.playerChoice);
  const computerChoice = useSelector((state) => state.game.computerChoice);

  return (
    <StyledGame>
      <GameChoice player="player" choice={userChoice} />
      <GameChoice
        player="computer"
        choice={computerChoice}
        animateRotation={true}
      />
      <Result />
    </StyledGame>
  );
};

export default Game;
